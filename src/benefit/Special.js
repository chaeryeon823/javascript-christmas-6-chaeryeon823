import { Console } from "@woowacourse/mission-utils";
import { BENEFIT_MESSAGE } from "../constant/Log.js";

const SPECIAL_BENEFIT = 1000;
const SUNDAY = 0;
const CHRISTMAS = 25;

class Special {
  #date;
  #day;
  #amount;

  constructor(date, day) {
    this.#date = date;
    this.#day = day;
    this.#calcAmount();
  }

  #calcAmount() {
    if (this.#day === SUNDAY || this.#date === CHRISTMAS) {
      this.#amount = SPECIAL_BENEFIT;
      return;
    }
    this.#amount = 0;
  }

  print() {
    if (this.#day === SUNDAY || this.#date === CHRISTMAS) {
      if (this.#amount !== 0) {
        Console.print(
          BENEFIT_MESSAGE.SPECIAL +
            this.#amount.toLocaleString("ko-KR") +
            BENEFIT_MESSAGE.AFTER_KEYWORD
        );
      }
    }
  }

  getAmount() {
    return this.#amount;
  }
}

export default Special;
