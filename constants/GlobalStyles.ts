import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const horizontalPadding = 20;

const globalStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.PureWhite,
    flexGrow: 1,
    height: '100%',
  },
});

export default globalStyles;
