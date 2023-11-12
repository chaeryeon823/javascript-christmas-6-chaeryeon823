import OutputView from "./View/OutputView.js";
import InputView from "./View/InputView.js";
import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    OutputView.printStart();
    const date = await InputView.readDate();
    Console.print(date);
  }
}

export default App;
