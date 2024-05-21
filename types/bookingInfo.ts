export interface BookingInfo {
  id: string;
  planet: string;
  travelerName: string;
  travelerSurame: string;
  travelerPhone: string;
  bookingDate: Date;
  tripDate: Date;
  tripHour: string;
  menuChoice: string;
  specialRequest?: string;
}
