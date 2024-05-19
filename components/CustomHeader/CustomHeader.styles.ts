import Colors from '@/constants/Colors';
import typos from '@/constants/Typos';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: Colors.PureWhite,
    display: 'flex',
    alignItems: 'center',
    height: 75,
  },
  title: {
    alignSelf: 'center',
    ...typos.headingThree,
  },
  iconContainer: {
    width: 44,
    height: 44,
    justifyContent: 'center',
  },
  iconLeft: {
    alignItems: 'flex-start',
  },
});

export default styles;
