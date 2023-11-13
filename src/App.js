import OutputView from "./View/OutputView.js";
import InputView from "./View/InputView.js";
import {Console} from "@woowacourse/mission-utils";
import {MENU_INFO} from "./constant/MenuList.js";

class App {
  async run() {
    OutputView.printStart();
    const date = await InputView.readDate();
    const order = await InputView.readMenus();
    OutputView.printDatePreview(date);
    OutputView.printMenu(order);
    OutputView.printTotalAmount(order);
  }
}

export default App;
