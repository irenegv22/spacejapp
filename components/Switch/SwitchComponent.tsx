import { type FC } from 'react';
import { Text, View, Switch } from 'react-native';
import styles from './SwitchComponent.styles';
import Colors from '@/constants/Colors';

interface SwitchProps {
  isEnabled: boolean;
  toggleSwitch: (event: boolean) => void;
  lableText?: string;
}
const SwitchComponent: FC<SwitchProps> = ({ isEnabled, toggleSwitch, lableText }) => {
  return (
    <View style={styles.container}>
      {lableText && <Text style={[styles.lableText, isEnabled && styles.selectedLableText]}>{lableText}</Text>}
      <Switch
        trackColor={{ false: Colors.Grey250, true: Colors.Main100 }}
        thumbColor={Colors.PureWhite}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchComponent;
