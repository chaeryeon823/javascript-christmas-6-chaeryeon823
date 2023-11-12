import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/Log.js";
import validateDate from "../validator/validateDate.js";
const InputView = {
  async readDate() {
    try {
      const dateStr = await Console.readLineAsync(INPUT_MESSAGE.DATE);
      return validateDate(dateStr);
    } catch (e) {
      Console.print(e.message);
      return await InputView.readDate();
    }
  },

  // ...
};
export default InputView;
