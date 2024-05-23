import { Text, View, StyleSheet, FlatList } from 'react-native';
import globalStyles, { horizontalPadding } from '@/constants/GlobalStyles';
import CustomHeader from '@/components/CustomHeader/CustomHeader';
import { useSelector } from 'react-redux';
import { BookingInfo } from '@/types/bookingInfo';
import { FC } from 'react';
import { selectReservations } from '@/redux/selectors/reservationSelector';
import { RootState } from '@/redux/store';
import TravelReservationCard from '@/components/TravelReservationCard/TravelReservationCard';
import { formatDateString } from '@/utils/date.utils';
import { findPlanetByName } from '@/utils/planet.utils';
import typos from '@/constants/Typos';

const BookingsScreen: FC = () => {
  const travelerReservations: BookingInfo[] = useSelector((state: RootState) => selectReservations(state));

  const renderItem = (item: { index: number; item: BookingInfo }) => (
    <View style={styles.travelCardContainer}>
      <TravelReservationCard
        planetInfo={findPlanetByName(item.item.planet)}
        tripDate={formatDateString(item.item.tripDate.toString())}
        tripHour={item.item.tripHour}
        menuChoice={item.item.menuChoice}
      />
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <CustomHeader title={'Mis viajes'} />
      {travelerReservations.length == 0 && (
        <Text style={styles.noReservationText}> Ups de momento no tienes ninguna reserva </Text>
      )}
      {travelerReservations && travelerReservations.length > 0 && (
        <FlatList
          data={travelerReservations}
          renderItem={renderItem}
          keyExtractor={item => String(item.id)}
          initialNumToRender={10}
          maxToRenderPerBatch={2}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...globalStyles.mainContainer,
    paddingHorizontal: horizontalPadding,
    flex: 1,
  },
  noReservationText: {
    flex: 0.7,
    textAlign: 'center',
    textAlignVertical: 'center',
    ...typos.bodyTwo,
  },
  travelCardContainer: {
    paddingVertical: 12,
  },
});

export default BookingsScreen;
