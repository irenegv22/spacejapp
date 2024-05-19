import Ionicons from '@expo/vector-icons/Ionicons';
import { type FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './CustomHeader.styles';
import { useNavigation } from 'expo-router';

interface HeaderProps {
  title: string;
  back?: boolean;
}
const CustomHeader: FC<HeaderProps> = ({ title, back = false }) => {
  const { canGoBack, goBack } = useNavigation();

  const handleOnPress = () => {
    if (canGoBack()) goBack();
  };

  return (
    <View style={styles.container}>
      {canGoBack() && back ? (
        <TouchableOpacity
          onPress={handleOnPress}
          accessibilityRole="button"
          style={[styles.iconContainer, styles.iconLeft]}
        >
          <Ionicons name="chevron-back-outline" size={18} color="black" />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconContainer} />
      )}
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <View style={styles.iconContainer} />
    </View>
  );
};

export default CustomHeader;
