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

        [HttpPost("initiate")]
        public async Task<ActionResult<string>> InitiateReservationRequest([FromBody] Reservation reservationRequest)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                if (string.IsNullOrEmpty(reservationRequest.Name) || reservationRequest.Date == default || reservationRequest.Time == default || reservationRequest.NumberOfGuests <= 0)
                {
                    return BadRequest("Missing required fields. Please provide valid values for name, date, time, and number of guests.");
                }

                if (_context.Reservations.Any(r => r.Date == reservationRequest.Date && r.Time == reservationRequest.Time))
                {
                    return BadRequest("Reservation already exists for the selected date and time.");
                }

                _context.Add(reservationRequest);
                await _context.SaveChangesAsync();

                return Ok($"Reservation initiated. Reservation ID: {reservationRequest.Id}");
            }
            catch (Exception ex)
            {
                LogException(ex);
                return StatusCode(500, new { message = "An error occurred while processing the reservation request.", details = ex.Message });
            }
        }

        private void LogException(Exception ex)
        {
            Console.WriteLine($"Exception: {ex.Message}\nStackTrace: {ex.StackTrace}");
        }


    }
}
