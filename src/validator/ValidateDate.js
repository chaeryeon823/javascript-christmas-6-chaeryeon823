import { ERROR_MESSAGE } from "../constant/Error.js";
import ValidateCommon from "./ValidateCommon.js";
function validateDate(dateInput) {
  ValidateCommon.checkEmpty(dateInput);
  const date = Number(dateInput);
  checkDateString(date);
  checkDateRange(date);
  return date;
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
