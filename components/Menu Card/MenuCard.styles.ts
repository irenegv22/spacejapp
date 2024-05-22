import Colors from '@/constants/Colors';
import typos from '@/constants/Typos';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    margin: 8,
    alignItems: 'center',
    backgroundColor: Colors.Grey200,
    width: 120,
    height: 180,
  },
  cardContainer: {
    padding: 8,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  selectedCard: {
    borderColor: Colors.Main150,
    backgroundColor: Colors.Main150,
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    ...typos.bodyThree,
    color: Colors.Black,
    textAlign: 'center',
    padding: 2,
  },
  selectedName: {
    color: Colors.PureWhite,
  },
});

export default styles;
