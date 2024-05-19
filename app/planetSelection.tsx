import { StyleSheet, Text, View } from 'react-native';
import { type FC } from 'react';
import CustomHeader from '@/components/CustomHeader/CustomHeader';
import globalStyles, { horizontalPadding } from '@/constants/GlobalStyles';

const PlanetSelectionScreen: FC = () => {
  return (
    <View style={styles.mainContainer}>
      <CustomHeader title={'Seleciona un planeta'} back />
      <View style={styles.contentContainer}>
        <Text>Elije el planeta al que quieras viajar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...globalStyles.mainContainer,
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: horizontalPadding,
  },
});

export default PlanetSelectionScreen;
