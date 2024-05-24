import { Alert } from 'react-native';

export const reservationSuccessAlert = (action: () => void) => {
  Alert.alert('Tu reserva ha sido realizada', 'Disfruta de tu nueva aventura!', [
    {
      text: 'Aceptar',
      style: 'default',
      onPress: action,
    },
  ]);
};
