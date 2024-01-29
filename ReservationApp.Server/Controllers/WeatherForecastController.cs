using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using restaurant_reservation_api.Controllers;
using restaurant_reservation_api.Data;
using restaurant_reservation_api.Entities;

namespace ReservationApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly DataContext _context;
        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, DataContext context)
        {
            _logger = logger;
            _context = context;
        }
/*
        [HttpGet(Name = "GetWeatherForecast")]
        public async Task<List<Reservation>> GetReservations()
        {

            List<Reservation> reservations = await _context.Reservations.ToListAsync();

            return reservations;
        }*/
    }
}
