import { StyleSheet, Text, View, TextInput, ScrollView, Platform } from 'react-native';
import { useState, type FC } from 'react';
import CustomHeader from '@/components/CustomHeader/CustomHeader';
import globalStyles, { horizontalPadding } from '@/constants/GlobalStyles';
import Colors from '@/constants/Colors';
import typos from '@/constants/Typos';
import { BookingInfo } from '@/types/bookingInfo';
import PlanetCard from '@/components/PlanetCard/PlanetCard';
import { planets } from '@/__mocks__/availablePlanets';
import DatePicker from '@/components/DatePicker/DatePicker';
import CircleSelector from '@/components/Selector/CircleSelector';
import { tripHourOptions } from '@/constants/constants';

const formInitialValue: BookingInfo = {
  id: '',
  planet: '',
  travelerName: '',
  travelerSurame: '',
  travelerPhone: '',
  bookingDate: new Date(),
  tripDate: new Date(),
  tripHour: '',
  menuChoice: '',
  specialRequest: '',
};

const PlanetSelectionScreen: FC = () => {
  const [formData, setFormData] = useState<BookingInfo>(formInitialValue);
  const [selectedPlanetId, setSelectedPlanetId] = useState<string | null>(null);

  const handleChange = (name: keyof BookingInfo, value: string | Date) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectPlanet = (id: string) => {
    setSelectedPlanetId(id);
  };

  return (
    <View style={styles.mainContainer}>
      <CustomHeader title={'Nuevo Viaje'} back />
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.contentTitle}>Selecciona tu destino</Text>
        <View style={styles.cardsContainer}>
          {planets.map(planet => (
            <PlanetCard
              key={planet.id}
              name={planet.name}
              imageUrl={planet.imageUrl}
              onSelect={() => handleSelectPlanet(planet.id)}
              selected={planet.id === selectedPlanetId}
              accessibilityLabel={planet.accessibilityLabel}
            />
          ))}
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.contentTitle}>Completa la información</Text>
          <View style={styles.formGroup}>
            <TextInput
              placeholder="Nombre"
              style={styles.formInputText}
              keyboardType="default"
              value={formData.travelerName}
              onChange={event => handleChange('travelerName', event.nativeEvent.text)}
            />
          </View>
          <View style={styles.formGroup}>
            <TextInput
              placeholder="Apellido"
              style={styles.formInputText}
              keyboardType="default"
              value={formData.travelerSurame}
              onChange={event => handleChange('travelerSurame', event.nativeEvent.text)}
            />
          </View>
          <View style={styles.formGroup}>
            <TextInput
              placeholder="Teléfono"
              style={styles.formInputText}
              keyboardType="number-pad"
              value={formData.travelerPhone}
              onChange={event => handleChange('travelerPhone', event.nativeEvent.text)}
            />
          </View>
          {/* TODO: Check if it works correcly on ios */}
          {Platform.OS === 'android' && (
            <View style={styles.formGroup}>
              <DatePicker value={formData.tripDate} onChange={date => handleChange('tripDate', date)} />
            </View>
          )}
          <View style={styles.formGroup}>
            <CircleSelector options={tripHourOptions} onChange={value => handleChange('tripHour', value)} />
          </View>
        </View>
      </ScrollView>
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
  formContainer: {
    paddingVertical: 10,
    display: 'flex',
  },
  contentTitle: {
    ...typos.bodyTwo,
    marginBottom: 8,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  formGroup: {
    marginBottom: 10,
    marginHorizontal: 0,
  },
  formInputText: {
    height: 54,
    backgroundColor: Colors.Grey150,
    paddingHorizontal: 16,
    borderRadius: 8,
    ...typos.bodyThree,
  },
});

export default PlanetSelectionScreen;
