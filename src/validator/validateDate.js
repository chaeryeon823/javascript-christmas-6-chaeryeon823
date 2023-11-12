import { ERROR_MESSAGE } from "../constant/Error.js";
function validateDate(dateStr) {
  checkEmpty(dateStr);
  const date = Number(dateStr);
  checkDateString(date);
  checkDateRange(date);
  return date;
}
function checkEmpty(str) {
  if (str === "" || str.indexOf(" ") >= 0) {
    throw new Error(ERROR_MESSAGE.EMPTY);
  }
}
function checkDateString(num) {
  if (isNaN(num)) {
    throw new Error(ERROR_MESSAGE.DATE);
  }
}
function checkDateRange(num) {
  if (1 > num || 31 < num) {
    throw new Error(ERROR_MESSAGE.DATE);
  }
}
export default validateDate;
