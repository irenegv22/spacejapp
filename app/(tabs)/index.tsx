import { StyleSheet, Text, View } from 'react-native';
import { type FC } from 'react';
import CustomHeader from '@/components/CustomHeader/CustomHeader';
import globalStyles, { horizontalPadding } from '@/constants/GlobalStyles';
import { router } from 'expo-router';
import typos from '@/constants/Typos';
import CustomButton from '@/components/CustomButton/CustomButton';

const HomeScreen: FC = () => {
  const handleOnPress = () => {
    router.push({ pathname: 'tripReservation' });
  };

  return (
    <View style={styles.mainContainer}>
      <CustomHeader title={'SpaceJapp'} />
      <Text style={typos.bodyOne}>Conocenos</Text>
      <View style={styles.buttonContainer}>
        <CustomButton lable={'Nuevo viaje'} onPress={handleOnPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...globalStyles.mainContainer,
    paddingHorizontal: horizontalPadding,
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
    flexDirection: 'column',
  },
});

export default HomeScreen;
