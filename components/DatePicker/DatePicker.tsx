import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { getTodayDay, getTodayMonth, getTodayYear } from '@/utils/date.utils';
import styles from './DatePicker.styles';

type DatePickerProps = {
  value: Date;
  onChange: (date: Date) => void;
};

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
  const [show, setShow] = useState(false);

  const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || value;
    onChange(currentDate);
    setShow(false);
  };

  const formattedDate = format(value, 'dd-MM-yyyy');

  const renderDatePicker = () => (
    <DateTimePicker
      value={value}
      mode="date"
      display={'default'}
      onChange={handleChange}
      minimumDate={new Date(getTodayYear(), getTodayMonth(), getTodayDay())}
    />
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShow(true)} style={styles.dateInput}>
        <Text style={styles.dateText}>{formattedDate}</Text>
      </TouchableOpacity>
      {show && Platform.OS === 'android' && renderDatePicker()}
    </View>
  );
};

export default DatePicker;
