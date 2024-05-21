import Colors from '@/constants/Colors';
import typos from '@/constants/Typos';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleContainer: {
    marginRight: 8,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.Black,
    backgroundColor: 'transparent',
  },
  selectedCircle: {
    backgroundColor: Colors.Main100,
    borderColor: Colors.Main100,
  },
  optionText: {
    ...typos.bodyThree,
  },
});

export default styles;
