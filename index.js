const addDays = require("date-fns/addDays");
const getDaysAfterDays = (days) => {
  const currentDate = addDays(new Date(2020, 7, 22), days);
  return `${currentDate.getDate()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getFullYear()}`;
};
module.exports = getDaysAfterDays;
console.log(getDaysAfterDays(3));
