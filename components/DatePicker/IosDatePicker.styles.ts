import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateInput: {
    height: 54,
    backgroundColor: Colors.Grey150,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  dateText: {
    fontSize: 18,
    color: Colors.Black,
  },
});

export default styles;
