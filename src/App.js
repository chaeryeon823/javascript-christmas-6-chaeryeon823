import OutputView from "./View/OutputView.js";
import InputView from "./View/InputView.js";
import {Console} from "@woowacourse/mission-utils";
import {MENU_INFO} from "./constant/MenuList.js";
import Benefit from "./Benefit.js";

class App {
  async run() {
    OutputView.printStart();
    const date = await InputView.readDate();
    const order = await InputView.readMenus();
    OutputView.printDatePreview(date);
    OutputView.printMenu(order);
    const totalAmount = order.calcTotalAmount();
    OutputView.printTotalAmount(totalAmount);
    const benefit = new Benefit(totalAmount, date, order);
    OutputView.printGiveaway(benefit);
    OutputView.printBenefit(benefit);
    OutputView.printTotalBenefitAmount(benefit);
    OutputView.printPayAmount(benefit);

  }
}

export default App;
