import { BENEFIT_MESSAGE } from "../constant/Log.js";
import { Console } from "@woowacourse/mission-utils";

const DDAY_BENEFIT_STANDARD = 1000;
const DDAY_BENEFIT = 100;
const CHRISTMAS = 25;

class ChristmasDay {
  #date;
  #amount;

  constructor(date) {
    this.#date = date;
    this.#calcAmount();
  }

  #calcAmount() {
    if (this.#date <= CHRISTMAS) {
      this.#amount =
        DDAY_BENEFIT_STANDARD + this.#date * DDAY_BENEFIT - DDAY_BENEFIT;
      return;
    }
    this.#amount = 0;
  }

  print() {
    if (this.#amount !== 0) {
      Console.print(
        BENEFIT_MESSAGE.CHRISTMAS + this.#amount.toLocaleString("ko-KR")
      );
    }
  }

  getTitle() {
    return BENEFIT_MESSAGE.CHRISTMAS;
  }
  getAmount() {
    return this.#amount;
  }
}

export default ChristmasDay;
