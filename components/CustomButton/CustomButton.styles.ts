import Colors from '@/constants/Colors';
import typos from '@/constants/Typos';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    ...typos.headingThree,
    color: Colors.PureWhite
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    height: 64,
    width: '100%',
    borderRadius: 8
  },
  buttonEnable: {
    backgroundColor: Colors.Main100
  },
  buttonDisable: {
    backgroundColor: Colors.MainDisable
  }
});

export default styles;
