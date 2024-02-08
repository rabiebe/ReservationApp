# Reservation System

## About

This reservation system provides a straightforward platform for users to register, log in, and make reservations across different categories. To ensure a smooth process, date and time restrictions are in place, preventing users from making conflicting reservations.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Usage](#usage)
- [Installation](#installation)

## Features

1. **User Registration and Authentication**
   - Users can create accounts and log in securely.

2. **Reservation Initiation with Restrictions**
   - Users can initiate reservations, but the system enforces date and time restrictions to avoid conflicts.

3. **View Available Categories**
   - The home page provides an overview of available categories for reservations.

4. **Confirmation Modal**
   - Upon successfully making a reservation, users receive a confirmation modal.

## Usage

1. **Register/Login:**
   - Users can create an account or log in.

2. **View Categories:**
   - Navigate to the home page to explore available reservation categories.

3. **Initiate Reservation:**
   - Click on "Book Now" to start a reservation, ensuring it doesn't conflict with existing reservations.

4. **Confirmation Modal:**
   - A confirmation modal will appear, confirming the successful reservation.

## Installation

### Database Configuration

1. **Configure Database:**
   - Open the `appsettings.json` file and update the `ConnectionStrings` section with your database server and credentials.

   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=your-server;Database=ReservationSystemDb;User Id=your-username;Password=your-password;"
   }
2. **Run Migrations:**
In the Package Manager Console, execute the following commands to apply migrations and update the database: Update-Database
