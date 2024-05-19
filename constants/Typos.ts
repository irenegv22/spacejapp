import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

const typos = StyleSheet.create({
  /* -------- HEADINGS -------- */
  headingOne: {
    fontFamily: 'SpaceMono',
    fontSize: 38,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 42,
    letterSpacing: 1,
    color: Colors.Black,
  },
  headingTwo: {
    fontFamily: 'SpaceMono',
    fontSize: 22,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 26,
    letterSpacing: 1,
    color: Colors.Black,
  },
  headingThree: {
    fontFamily: 'SpaceMono',
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 1,
    color: Colors.Black,
  },

  /* -------- BODY -------- */
  bodyOne: {
    fontFamily: 'SpaceMono',
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 1,
    color: Colors.Black,
  },
  bodyTwo: {
    fontFamily: 'SpaceMono',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 1,
    color: Colors.Black,
  },
  bodyThree: {
    fontFamily: 'SpaceMono',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 1,
    color: Colors.Black,
  },
});

export default typos;
