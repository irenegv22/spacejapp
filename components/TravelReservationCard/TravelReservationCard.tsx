import { Text, Image, View } from 'react-native';
import type { FC } from 'react';
import styles from './TravelReservationCard.styles';
import { PlanetInfo } from '@/types/planetInfo';

interface TravelReservationProps {
  planetInfo: PlanetInfo | null;
  tripDate: string;
  tripHour: string;
  menuChoice: string;
}

const TravelReservationCard: FC<TravelReservationProps> = ({ planetInfo, tripDate, tripHour, menuChoice }) => {
  return (
    <View style={styles.cardContainer}>
      {planetInfo && (
        <Image
          resizeMode="cover"
          source={{ uri: planetInfo.imageUrl }}
          style={styles.image}
          accessibilityLabel={planetInfo.accessibilityLabel}
        />
      )}
      <View style={styles.textContainer}>
        <Text style={[styles.title]} numberOfLines={2} ellipsizeMode="tail">
          {planetInfo?.name}
        </Text>
        <Text style={[styles.subTitle]} numberOfLines={1} ellipsizeMode="tail">
          {tripDate} - {tripHour}h
        </Text>
        <Text style={[styles.subTitle]} numberOfLines={2} ellipsizeMode="tail">
          {menuChoice}
        </Text>
      </View>
    </View>
  );
};

export default TravelReservationCard;
