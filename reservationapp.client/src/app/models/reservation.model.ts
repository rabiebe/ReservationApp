export interface Reservation {
  id: number;
  name: string;
  date: string;
  time: string;
  status: string;
  statusBgColor?: string;
  statusTextColor?: string;
  image?: string;
  numberOfGuests?: number;
}
