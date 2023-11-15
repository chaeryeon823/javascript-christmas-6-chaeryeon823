import OutputView from "./View/OutputView.js";
import InputView from "./View/InputView.js";
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
    OutputView.printEventBadge(benefit);
  }
}

export default App;
