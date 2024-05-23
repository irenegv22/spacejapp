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
import CustomButton from '@/components/CustomButton/CustomButton';
import SwitchComponent from '@/components/Switch/SwitchComponent';
import CustomModal from '@/components/CustomModal/CustomModal';
import ModalHeader from '@/components/CustomHeader/ModalHeader';
import { systemErrorAlert } from '@/alers/systemErrorAlert';
import { Paths, get } from '@/services/https';
import { MenuResponse } from '@/types/httpsResponses';
import { MenuInfo } from '@/types/menuInfo';
import { selectMenuItems } from '@/utils/menu.utils';
import MenuCard from '@/components/Menu Card/MenuCard';
import { useDispatch } from 'react-redux';
import { addTravelerReservation } from '@/redux/reducers/reservationsReducer';

const formInitialValue: BookingInfo = {
  id: '',
  planet: '',
  travelerName: '',
  travelerSurame: '',
  travelerPhone: '',
  bookingDate: new Date(),
  tripDate: new Date(),
  tripHour: '',
  vegetarian: false,
  glutenFree: false,
  menuChoice: '',
};

const PlanetSelectionScreen: FC = () => {
  const [formData, setFormData] = useState<BookingInfo>(formInitialValue);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [menuToShow, setMenuToShow] = useState<MenuInfo[]>([]);

  const dispatch = useDispatch();

  const handleChange = (name: keyof BookingInfo, value: string | Date | boolean) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFinishReservation = async () => {
    if (formData.menuChoice === '') {
      await handleMenuItems();
      setShowMenuModal(true);
      return;
    }
    dispatch(addTravelerReservation(formData));
  };

  const handleOnCloseModal = () => {
    const menuNotChooseData = {
      ...formData,
      menuChoice: '',
    };
    setFormData(menuNotChooseData);
    setMenuToShow([]);
    setShowMenuModal(false);
  };

  const getMenuDetails = async (mealName: string) => {
    try {
      const encoded = encodeURIComponent(mealName);
      const pathParams = `?s=${encoded}`;
      const path = `${Paths.Search}/${pathParams}`;
      const menuFoodItem = await get(path);
      if ((menuFoodItem as MenuResponse).meals && (menuFoodItem as MenuResponse).meals.length > 0) {
        const meal = (menuFoodItem as MenuResponse).meals[0];
        return {
          id: meal.idMeal,
          name: meal.strMeal,
          imageUrl: meal.strMealThumb,
        };
      }
      return null;
    } catch {
      return systemErrorAlert();
    }
  };

  const handleMenuItems = async () => {
    const menuItems = selectMenuItems(formData.vegetarian, formData.glutenFree);
    setMenuToShow([]);
    menuItems.forEach(async menuItem => {
      const menuDetails = await getMenuDetails(menuItem);
      if (menuDetails) {
        setMenuToShow(prevMenuToShow => [...prevMenuToShow, menuDetails]);
      }
    });
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
              value={formData.planet}
              onChange={name => handleChange('planet', name)}
              accessibilityLabel={planet.accessibilityLabel}
            />
          ))}
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.contentTitle}>Completa la información</Text>
          <View style={styles.formGroup}>
            <Text style={styles.lable}>Nombre:</Text>
            <TextInput
              placeholder="Nombre"
              style={styles.formInputText}
              keyboardType="default"
              value={formData.travelerName}
              onChange={event => handleChange('travelerName', event.nativeEvent.text)}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.lable}>Apellido:</Text>
            <TextInput
              placeholder="Apellido"
              style={styles.formInputText}
              keyboardType="default"
              value={formData.travelerSurame}
              onChange={event => handleChange('travelerSurame', event.nativeEvent.text)}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.lable}>Teléfono:</Text>
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
              <Text style={styles.lable}>Fecha del viaje:</Text>
              <DatePicker value={formData.tripDate} onChange={date => handleChange('tripDate', date)} />
            </View>
          )}
          <View style={styles.formGroup}>
            <Text style={styles.lable}>Hora del viaje:</Text>
            <CircleSelector options={tripHourOptions} onChange={value => handleChange('tripHour', value)} />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.lable}>Dietas especiales:</Text>
            <View style={styles.switchContainer}>
              <SwitchComponent
                isEnabled={formData.vegetarian}
                toggleSwitch={event => handleChange('vegetarian', event)}
                lableText="Vegetariana"
              />
              <SwitchComponent
                isEnabled={formData.glutenFree}
                toggleSwitch={event => handleChange('glutenFree', event)}
                lableText="Sin gluten"
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            lable={formData.menuChoice === '' ? 'Elegir Menú' : 'Reservar'}
            onPress={handleFinishReservation}
          />
        </View>
      </ScrollView>
      <CustomModal
        isVisible={showMenuModal}
        onClose={() => {
          setShowMenuModal(false);
        }}
      >
        <View style={{ flex: 1 }}>
          <ModalHeader title="Menú del Viaje" onClose={handleOnCloseModal} />
          <View style={styles.modalContainer}>
            <View style={styles.menuCardContainer}>
              {menuToShow.length > 0 &&
                menuToShow.map((menuItem: MenuInfo) => (
                  <MenuCard
                    key={menuItem.id}
                    name={menuItem.name}
                    imageUrl={menuItem.imageUrl}
                    value={formData.menuChoice}
                    onChange={foodMenu => handleChange('menuChoice', foodMenu)}
                    accessibilityLabel={menuItem.name}
                  />
                ))}
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton
                onPress={() => setShowMenuModal(false)}
                lable="Aceptar"
                disabled={formData.menuChoice === ''}
              />
            </View>
          </View>
        </View>
      </CustomModal>
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
  lable: {
    paddingLeft: 4,
    paddingBottom: 4,
    ...typos.lable,
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
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 24,
    flexDirection: 'column',
  },
  modalContainer: {
    paddingHorizontal: horizontalPadding,
    paddingVertical: 10,
    display: 'flex',
    flex: 1,
    gap: 10,
  },
  menuCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 24,
    paddingTop: 24,
  },
});

export default PlanetSelectionScreen;
