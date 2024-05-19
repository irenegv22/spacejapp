import { Text, View } from 'react-native';
import globalStyles from '@/constants/GlobalStyles';
import CustomHeader from '@/components/CustomHeader/CustomHeader';

export default function TabTwoScreen() {
  return (
    <View style={globalStyles.mainContainer}>
      <CustomHeader title={'Mis viajes'} />
      <Text>Upss de momento no tienes ninguna reserva</Text>
    </View>
  );
}
