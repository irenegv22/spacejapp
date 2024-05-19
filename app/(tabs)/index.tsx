import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { type FC } from 'react';
import CustomHeader from '@/components/CustomHeader/CustomHeader';
import globalStyles, { horizontalPadding } from '@/constants/GlobalStyles';
import { router } from 'expo-router';
import typos from '@/constants/Typos';

const HomeScreen: FC = () => {
  const handleOnPress = () => {
    router.push({ pathname: 'planetSelection' });
  };

  return (
    <View style={styles.mainContainer}>
      <CustomHeader title={'SpaceJapp'} />
      <Text style={typos.bodyOne}>Conocenos</Text>
      <TouchableOpacity onPress={handleOnPress}>
        <Text>Aprieta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...globalStyles.mainContainer,
    paddingHorizontal: horizontalPadding,
    flex: 1,
  },
});

export default HomeScreen;
