import { TouchableOpacity, Text, Image } from 'react-native';
import type { FC } from 'react';
import styles from './PlanetCard.styles';

interface PlanetProps {
  name: string;
  imageUrl: string;
  onSelect: () => void;
  selected: boolean;
  accessibilityLabel: string;
}

const PlanetCard: FC<PlanetProps> = ({ name, imageUrl, onSelect, selected, accessibilityLabel }) => (
  <TouchableOpacity onPress={onSelect} style={[styles.card, selected && styles.selectedCard]}>
    <Image
      resizeMode="contain"
      source={{ uri: imageUrl }}
      style={[styles.image, selected && styles.selectedImage]}
      accessibilityLabel={accessibilityLabel}
    />
    <Text style={[styles.name, selected && styles.selectedName]} numberOfLines={2} ellipsizeMode="tail">
      {name}
    </Text>
  </TouchableOpacity>
);

export default PlanetCard;
