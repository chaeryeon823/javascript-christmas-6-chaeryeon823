const ValidateCommon = {
  checkEmpty(str, errorMessage) {
    if (str === "" || str.indexOf(" ") >= 0) {
      throw new Error(errorMessage);
    }
  },
};
export default ValidateCommon;
