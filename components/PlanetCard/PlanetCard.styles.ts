import Colors from '@/constants/Colors';
import typos from '@/constants/Typos';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: Colors.Grey200,
    borderRadius: 8,
    margin: 8,
    alignItems: 'center',
    backgroundColor: Colors.PureBlack,
    width: '100%',
  },
  cardContainer: {
    padding: 8,
    alignItems: 'center',
  },
  selectedCard: {
    borderColor: Colors.Success,
    backgroundColor: Colors.PureBlack,
    borderRadius: 8,
    borderWidth: 2,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 8,
    opacity: 0.5,
  },
  selectedImage: {
    opacity: 1,
    color: Colors.Success,
  },
  name: {
    ...typos.bodyTwo,
    color: Colors.Grey250,
    textAlign: 'center',
  },
  selectedName: {
    color: Colors.PureWhite,
  },
});

export default styles;
