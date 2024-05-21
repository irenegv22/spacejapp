import Colors from '@/constants/Colors';
import typos from '@/constants/Typos';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateInput: {
    height: 54,
    backgroundColor: Colors.Grey150,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
  },
  dateText: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    ...typos.bodyThree,
  },
});

export default styles;
