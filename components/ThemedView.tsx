import { View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps;

export function ThemedView({ style, ...otherProps }: ThemedViewProps) {
  const backgroundColor = 'white';

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
