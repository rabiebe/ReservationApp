﻿using System.ComponentModel.DataAnnotations;

namespace restaurant_reservation_api.Entities
{
    public class Reservation
    {
        public int Id { get; set; }
        public string? Name { get; set; }

        public String? Phone { get; set; }

        public string? Email { get; set; }

        [Required]
        public required DateOnly Date {  get; set; }

        [Required]
        public required string Time {  get; set; }
        public string? Status { get; set; }
        public string? StatusBgColor {  get; set; }
        public string? StatusTextColor { get; set; }
        public string? Image {  get; set; }
        public int NumberOfGuests { get; set; }

    }
}
