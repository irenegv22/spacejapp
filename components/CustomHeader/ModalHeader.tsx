import Ionicons from '@expo/vector-icons/Ionicons';
import { type FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './CustomHeader.styles';

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}
const ModalHeader: FC<ModalHeaderProps> = ({ title, onClose }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose} accessibilityRole="button" style={[styles.iconContainer, styles.iconLeft]}>
        <Ionicons name="close-outline" size={20} color="black" />
      </TouchableOpacity>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <View style={styles.iconContainer} />
    </View>
  );
};

export default ModalHeader;
