import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import type { FC } from 'react';
import styles from './CustomButton.styles';

interface ButtonProps {
  onPress: () => void;
  lable: string;
  disabled?: boolean;
}

const CustomButton: FC<ButtonProps> = ({ onPress, lable, disabled = false }) => (
  <TouchableOpacity
    disabled={disabled}
    style={[styles.button, disabled ? styles.buttonDisable : styles.buttonEnable]}
    onPress={onPress}
  >
    <Text style={styles.text}>{lable}</Text>
  </TouchableOpacity>
);

export default CustomButton;
