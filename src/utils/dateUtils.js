const returnDate = (date1, date2) => {
  const hasSecondDate = date1 && date2 ? true : false;
  var result;

  const month1 = date1.toLocaleString('en-GB', { month: 'short' });
  const day1 = date1.getDate();

  if (hasSecondDate) {
    const month2 = date2.toLocaleString('en-GB', { month: 'short' });
    const day2 = date2.getDate();
    result = {
      hasSecondDate: true,
      month1: month1,
      day1: day1,
      month2: month2,
      day2: day2,
    };
  } else {
    result = {
      hasSecondDate: false,
      month1: month1,
      day1: day1,
    };
  }
  return result;
};

export default returnDate;
