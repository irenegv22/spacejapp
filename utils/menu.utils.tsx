import { mealGroups } from '@/__mocks__/mealGroups';

//Select's the menu items that the user will be able to choose depending on special diet
export const selectMenuItems = (vegetarian: boolean, glutenFree: boolean) => {
  if (vegetarian && glutenFree) {
    return mealGroups.vegetarianAndGluttenFree;
  } else if (vegetarian) {
    return mealGroups.vegetarian;
  } else if (glutenFree) {
    return mealGroups.glutenFree;
  } else return mealGroups.standard;
};
