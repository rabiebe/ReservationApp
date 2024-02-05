using Microsoft.AspNetCore.Identity;
using restaurant_reservation_api.Entities;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReservationApp.Server.Entities
{
    public class User 
    {

        [Key]
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool IsReservation { get; set; }

    }
}
