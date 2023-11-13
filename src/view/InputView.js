import {Console} from "@woowacourse/mission-utils";
import {INPUT_MESSAGE} from "../constant/Log.js";
import validateDate from "../validator/ValidateDate.js";
import OrderMenu from "../OrderMenu.js";
import Order from "../Order.js";
import ValidateCommon from "../validator/ValidateCommon.js";
const InputView = {
  async readDate() {
    try {
      const dateInput = await Console.readLineAsync(INPUT_MESSAGE.DATE);
      return validateDate(dateInput);
    } catch (e) {
      Console.print(e.message);
      return await InputView.readDate();
    }
  },
  async readMenus() {
    try {
      const menuInput = await Console.readLineAsync(INPUT_MESSAGE.MENU);
      ValidateCommon.checkEmpty(menuInput);

      let menuInputList = menuInput.split(",");
      let orderMenuList = [];

      menuInputList.forEach((menuInput) => {
        orderMenuList.push(new OrderMenu(menuInput));
      });
      return new Order(orderMenuList);
    } catch (e) {
      Console.print(e.message);
      return await InputView.readMenus();
    }
  },

};
export default InputView;
