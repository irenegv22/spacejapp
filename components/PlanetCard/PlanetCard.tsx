import { TouchableOpacity, Text, Image, View } from 'react-native';
import type { FC } from 'react';
import styles from './PlanetCard.styles';

interface PlanetProps {
  name: string;
  imageUrl: string;
  onChange: (name: string) => void;
  value: string;
  accessibilityLabel: string;
}

const PlanetCard: FC<PlanetProps> = ({ name, imageUrl, onChange, value, accessibilityLabel }) => {
  const selected = value === name;

  return (
    <TouchableOpacity
      onPress={() => onChange(name)}
      style={[styles.card, selected && styles.selectedCard]}
      activeOpacity={0.9}
    >
      <View style={styles.cardContainer}>
        <Image
          resizeMode="cover"
          source={{ uri: imageUrl }}
          style={[styles.image, selected && styles.selectedImage]}
          accessibilityLabel={accessibilityLabel}
        />
        <Text style={[styles.name, selected && styles.selectedName]} numberOfLines={2} ellipsizeMode="tail">
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlanetCard;
