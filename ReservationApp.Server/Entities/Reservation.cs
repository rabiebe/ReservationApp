using System.ComponentModel.DataAnnotations;

namespace restaurant_reservation_api.Entities
{
    public class Reservation
    {
        public int Id { get; set; }
        public string? Name { get; set; }

        [Required]
        public DateTime Date {  get; set; }

        [Required]
        public int Time {  get; set; }
        public string? Status { get; set; }
        public string? StatusBgColor {  get; set; }
        public string? StatusTextColor { get; set; }
        public string? Image {  get; set; }
        public int NumberOfGuests { get; set; }

    }
}
