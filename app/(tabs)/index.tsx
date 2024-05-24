import { StyleSheet, Text, View } from 'react-native';
import { type FC } from 'react';
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
      <Text style={styles.titleText}>Bienvenido a SpaceJapp!</Text>
      <Text style={styles.introductionText}>Embárcate en una nueva aventura reservando viajes al espacio </Text>
      <Text style={styles.introductionText}>
        Ya sea caminando sobre la Luna, explorando los misteriosos paisajes de Marte o experimentando la ingravitez en
        la Estación Espacial, tenemos tu viaje perfecto!{' '}
      </Text>
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
  titleText: {
    ...typos.bodyOne,
    marginBottom: 16,
    marginTop: 70,
  },
  introductionText: {
    textAlign: 'left',
    textAlignVertical: 'center',
    paddingVertical: 16,
    ...typos.bodyTwo,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
    flexDirection: 'column',
  },
});

export default HomeScreen;
