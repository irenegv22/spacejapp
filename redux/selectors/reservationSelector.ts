import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectReservations = (state: RootState) => state.reservation.reservations;

export const selectReservationsMemoized = createSelector([selectReservations], reservations => reservations);
