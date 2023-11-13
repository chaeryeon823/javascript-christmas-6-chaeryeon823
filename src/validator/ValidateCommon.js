import {ERROR_MESSAGE} from "../constant/Error.js";

const ValidateCommon = {
  checkEmpty(str) {
  if (str === "" || str.indexOf(" ") >= 0) {
    throw new Error(ERROR_MESSAGE.EMPTY);
  }
}
}
export default ValidateCommon;