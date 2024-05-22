import { TouchableOpacity, Text, Image, View } from 'react-native';
import type { FC } from 'react';
import styles from './MenuCard.styles';

interface MenuProps {
  name: string;
  imageUrl: string;
  onChange: (name: string) => void;
  value: string;
  accessibilityLabel: string;
}

const MenuCard: FC<MenuProps> = ({ name, imageUrl, onChange, value, accessibilityLabel }) => {
  const selected = value === name;

  return (
    <TouchableOpacity onPress={() => onChange(name)} style={[styles.card, selected && styles.selectedCard]}>
      <View style={styles.cardContainer}>
        <Image
          resizeMode="cover"
          source={{ uri: imageUrl }}
          style={styles.image}
          accessibilityLabel={accessibilityLabel}
        />
        <View style={styles.textContainer}>
          <Text style={[styles.name, selected && styles.selectedName]} numberOfLines={3} ellipsizeMode="tail">
            {name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuCard;
