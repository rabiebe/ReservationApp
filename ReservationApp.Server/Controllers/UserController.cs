using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using ReservationApp.Server.Entities;
using restaurant_reservation_api.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace ReservationApp.Server.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly DataContext _context;

        public UserController(IConfiguration configuration, DataContext context)
        {
            _configuration = configuration;
            _context = context;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User loginRequest)
        {
            if (ModelState.IsValid)
            {
                var user = _context.Users.FirstOrDefault(u => u.UserName == loginRequest.UserName);

                if (user != null && VerifyPassword(user.Password, loginRequest.Password))
                {
                    var token = GenerateJwtToken(user.UserName);
                    return Ok(new { Token = token });
                }
            }

            return Unauthorized();
        }

        private bool VerifyPassword(string hashedPasswordInDb, string enteredPassword)
        {
            string[] parts = hashedPasswordInDb.Split('$');
            if (parts.Length != 2)
            {
                return false; 
            }

            byte[] salt = Convert.FromBase64String(parts[0]);
            string hashedPassword = parts[1];

            string enteredPasswordHashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: enteredPassword,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));


            return hashedPassword == enteredPasswordHashed;
        }



        [HttpPost("register")]
        public IActionResult Register([FromBody] User registrationRequest)
        {
            if (ModelState.IsValid)
            {
                if (_context.Users.Any(u => u.UserName == registrationRequest.UserName))
                {
                    return BadRequest("Username is already taken");
                }

                string hashedPassword = HashPassword(registrationRequest.Password);

                var newUser = new User
                {
                    UserName = registrationRequest.UserName,
                    Password = hashedPassword,
                };

                _context.Users.Add(newUser);
                _context.SaveChanges();

                var token = GenerateJwtToken(newUser.UserName);
                return Ok(new { Token = token });
            }

            return BadRequest(ModelState);
        }

        private string HashPassword(string password)
        {
            byte[] salt = new byte[16];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }

            string hashedPassword = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));

            return $"{Convert.ToBase64String(salt)}${hashedPassword}";
        }


        private string GenerateJwtToken(string username)
        {
            var issuer = _configuration["Jwt:Issuer"];
            var audience = _configuration["Jwt:Audience"];
            var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Email, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            }),
                Expires = DateTime.UtcNow.AddMinutes(5),
                Issuer = issuer,
                Audience = audience,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha512Signature)
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }


    }
}
