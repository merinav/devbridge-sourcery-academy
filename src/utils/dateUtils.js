const returnDate = (date1, date2) => {
  let result = {
    startDate: {
      day: date1.getDate(),
      month: date1.toLocaleString('en-GB', { month: 'short' }),
    },
  };
  if (date2 !== undefined) {
    result.endDate = {
      day: date2.getDate(),
      month: date2.toLocaleString('en-GB', { month: 'short' }),
    };
  }
  return result;
};

export default returnDate;
