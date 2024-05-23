import { RootState } from '../store';

export const selectReservations = (state: RootState) => state.reservation.reservations;
