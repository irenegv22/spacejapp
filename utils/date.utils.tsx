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

//Gets a data in ISOString and send it back with the format "dd-mm-yyyy"
export const formatDateString = (dateString: string) => {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  return `${day}-${month}-${year}`;
};
