using Microsoft.EntityFrameworkCore;
using restaurant_reservation_api.Entities;

namespace restaurant_reservation_api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) 
        {
            
        }


        public DbSet<Reservation> Reservations { get; set; }
    }
}
