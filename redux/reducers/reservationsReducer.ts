import { BookingInfo } from '@/types/bookingInfo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TravelerReservationState {
  reservations: BookingInfo[];
}

const initialState: TravelerReservationState = {
  reservations: [],
};

const travelerReservationSlice = createSlice({
  name: 'travelerReservation',
  initialState,
  reducers: {
    addTravelerReservation(state, action: PayloadAction<BookingInfo>) {
      state.reservations.push(action.payload);
    },
  },
});

export const { addTravelerReservation } = travelerReservationSlice.actions;
export default travelerReservationSlice.reducer;
