import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

//Generates unique id
export const generateUUID = () => {
    const id = uuidv4();
    return id;
  };