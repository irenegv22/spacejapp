import Colors from '@/constants/Colors';
import typos from '@/constants/Typos';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  lableText: {
    ...typos.bodyThree,
    color: Colors.Grey250,
    marginRight: 4,
  },
  selectedLableText: {
    color: Colors.Black,
  },
});

export default styles;
