import { Text, View, StyleSheet } from 'react-native';
import globalStyles, { horizontalPadding } from '@/constants/GlobalStyles';
import CustomHeader from '@/components/CustomHeader/CustomHeader';
import { useSelector } from 'react-redux';
import { BookingInfo } from '@/types/bookingInfo';
import { FC } from 'react';
import { selectReservationsMemoized } from '@/redux/selectors/reservationSelector';

const BookingsScreen: FC = () => {
  const travelerReservations: BookingInfo[] = useSelector(selectReservationsMemoized);

  return (
    <View style={styles.mainContainer}>
      <CustomHeader title={'Mis viajes'} />
      {travelerReservations &&
        travelerReservations.map((travelerReservation, index) => (
          <View key={index}>
            <Text>{travelerReservation.planet}</Text>
            <Text>{travelerReservation.travelerName}</Text>
            <Text>{travelerReservation.menuChoice}</Text>
          </View>
        ))}
      {travelerReservations.length < 1 && <Text> Upss de momento no tienes ninguna reserva </Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...globalStyles.mainContainer,
    paddingHorizontal: horizontalPadding,
    flex: 1,
  },
});

export default BookingsScreen;
