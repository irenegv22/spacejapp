//Gets todays day
export const getTodayDay = () => {
  const today = new Date();
  const day = today.getDate();
  return day;
};

//Gets todays month
export const getTodayMonth = () => {
  const today = new Date();
  const month = today.getMonth();
  return month;
};

//Gets todays year
export const getTodayYear = () => {
  const today = new Date();
  const year = today.getFullYear();
  return year;
};
