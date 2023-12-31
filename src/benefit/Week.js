import { BENEFIT_MESSAGE } from "../constant/Log.js";

const WEEK_BENEFIT = 2023;
const WEEK = {
  WEEKEND: [5, 6],
  WEEKDAY: [0, 1, 2, 3, 4],
};

class Weekday {
  #amount;
  #day;
  #menuCount;
  #dayList;

  constructor(day, menuCount, dayList) {
    this.#day = day;
    this.#menuCount = menuCount;
    this.#dayList = dayList;
    this.#calcAmount();
  }

  #calcAmount() {
    if (WEEK[this.#dayList].includes(this.#day)) {
      this.#amount = this.#menuCount * WEEK_BENEFIT;
      return;
    }
    this.#amount = 0;
  }

  getTitle() {
    if (this.#dayList === "WEEKEND") {
      return BENEFIT_MESSAGE.WEEKEND;
    }
    if (this.#dayList === "WEEKDAY") {
      return BENEFIT_MESSAGE.WEEKDAY;
    }
  }
  getAmount() {
    return this.#amount;
  }
}

export default Weekday;
