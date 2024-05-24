import { BookingInfo } from '@/types/bookingInfo';

//Return true if reservation information including menu is completed
export const enableReservationButton = (data: BookingInfo): boolean => {
  if (
    data.planet !== '' &&
    data.travelerName !== '' &&
    data.travelerSurame !== '' &&
    data.travelerPhone !== '' &&
    data.tripHour !== '' &&
    data.menuChoice !== ''
  ) {
    return false;
  }
  return true;
};

//Return true or false to enable the button thats for the Menu or Reservation
export const handleEnableButton = (data: BookingInfo): boolean => {
  return data.menuChoice !== '' && enableReservationButton(data);
};
