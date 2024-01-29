using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using restaurant_reservation_api.Data;
using restaurant_reservation_api.Entities;



namespace restaurant_reservation_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReservationController : ControllerBase
    {

        private readonly DataContext _context;
        private readonly ILogger<ReservationController> _logger;

        public ReservationController(ILogger<ReservationController> logger, DataContext context)
        {
            _logger = logger;
            _context = context;
        }


       
        [HttpGet(Name = "GetReservations")]
        public async Task<List<Reservation>> GetReservations()
        {

            List<Reservation> reservations = await _context.Reservations.ToListAsync();

            return reservations;
        }


        [HttpPost]
        public async Task<ActionResult<List<Reservation>>> Save(Reservation reservation)
        {
            _logger.LogDebug(reservation.Name);
            ArgumentNullException.ThrowIfNull(reservation);
            //check if already exist
            //
            //
            _context.Reservations.Add(reservation);
            await _context.SaveChangesAsync();
            return Ok(reservation);
            
        }
    }
}
