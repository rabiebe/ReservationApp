using ReservationApp.Server.Entities;
using System;
using System.ComponentModel.DataAnnotations;

namespace restaurant_reservation_api.Entities
{
    public class Reservation
    {
        [Key]
        public int Id { get; set; }

        public string? Name { get; set; }

        public string? Phone { get; set; }

        public string? Email { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public string Time { get; set; }

        public string? Status { get; set; }

        public string? StatusBgColor { get; set; }

        public string? StatusTextColor { get; set; }

        public string? Image { get; set; }

        [Required]
        public int NumberOfGuests { get; set; }

        public int UserId { get; set; }
    }
}
