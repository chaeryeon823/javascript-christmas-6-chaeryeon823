import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/Log.js";
const InputView = {
  async readDate() {
    try {
      const dateStr = await Console.readLineAsync(INPUT_MESSAGE.DATE);
      // 날짜 입력 예외 처리
      return Number(dateStr);
    } catch (e) {
      Console.print(e.message);
    }
  },
  // ...
};
export default InputView;
