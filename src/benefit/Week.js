import {Console} from "@woowacourse/mission-utils";
import {BENEFIT_MESSAGE} from "../constant/Log.js";

const WEEK_BENEFIT = 2023;
const WEEK = {
  WEEKEND: [5, 6],
  WEEKDAY: [0, 1, 2, 3, 4],
}

class Weekday {
  #amount;
  #day;
  #menuCount;
  #dayList;

  constructor(day, menuCount, dayList) {
    this.#day = day;
    this.#menuCount = menuCount;
    this.#dayList = dayList;
    this.#calcWeekday();
  }

  #calcWeekday() {
    this.#amount = this.#menuCount * WEEK_BENEFIT;
  }

  print() {
    if (WEEK[this.#dayList].includes(this.#day) && this.#amount !== 0) {
      Console.print(BENEFIT_MESSAGE[this.#dayList] + this.#amount.toLocaleString("ko-KR") + BENEFIT_MESSAGE.AFTER_KEYWORD);
    }
  }

  getAmount() {
    return this.#amount;
  }
}

export default Weekday;