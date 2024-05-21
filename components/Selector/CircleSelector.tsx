import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './CircleSelector.styles';

interface CicleSelectorProps {
  options: string[];
  onChange: (value: string) => void;
}

const CicleSelector: React.FC<CicleSelectorProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={() => handleSelect(option)}>
          <View style={styles.circleContainer}>
            <View style={[styles.circle, selectedOption === option && styles.selectedCircle]} />
          </View>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CicleSelector;
