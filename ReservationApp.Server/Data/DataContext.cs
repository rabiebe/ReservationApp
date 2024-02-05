using Microsoft.EntityFrameworkCore;
using ReservationApp.Server.Entities;
using restaurant_reservation_api.Entities;

namespace restaurant_reservation_api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<User> Users { get; set; }

       
    }
}
