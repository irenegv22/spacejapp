import Colors from '@/constants/Colors';
import typos from '@/constants/Typos';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.Grey150,
    borderRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 80,
    paddingLeft: 8,
  },
  title: {
    ...typos.bodyTwo,
    color: Colors.Black,
    textAlign: 'left',
    padding: 2,
  },
  subTitle: {
    ...typos.bodyThree,
    color: Colors.Black,
    textAlign: 'left',
    padding: 2,
  },
});

export default styles;
