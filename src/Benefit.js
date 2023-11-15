import { MENU_INFO } from "./constant/MenuList.js";
import ChristmasDay from "./benefit/ChristmasDay.js";
import Weekday from "./benefit/Week.js";
import Special from "./benefit/Special.js";
import Giveaway from "./benefit/Giveaway.js";
import { EVENT_BADGE } from "./constant/Benefit.js";

const BENEFIT_STANDARD = 10000;
const BENEFIT_YEAR = 2023;
const BENEFIT_MONTH = 12;

class Benefit {
  #totalAmount;
  #date;
  #order;
  #totalBenefitAmount;
  #eventList;

  constructor(totalAmount, date, order) {
    this.#totalAmount = totalAmount;
    this.#date = date;
    this.#order = order;
    this.#eventList = this.#generateEventList();
    this.#totalBenefitAmount = this.#calcTotalBenefitAmount();
  }

  #generateEventList() {
    const dateObj = new Date(BENEFIT_YEAR, BENEFIT_MONTH - 1, this.#date);
    let eventList = [];
    eventList.push(new Giveaway(this.#totalAmount));
    eventList.push(new ChristmasDay(dateObj.getDate()));
    eventList.push(
      new Weekday(dateObj.getDay(), this.#getCountDessert(), "WEEKDAY")
    );
    eventList.push(
      new Weekday(dateObj.getDay(), this.#getCountMain(), "WEEKEND")
    );
    eventList.push(new Special(dateObj.getDate(), dateObj.getDay()));

    return eventList;
  }

  isBenefit() {
    if (this.#totalAmount >= BENEFIT_STANDARD && this.#totalBenefitAmount > 0) {
      return true;
    }
    return false;
  }
  getBenefit() {
    return this.#eventList;
  }

  #calcTotalBenefitAmount() {
    return this.#eventList.reduce((sum, event) => {
      return sum + event.getAmount();
    }, 0);
  }

  #getCountMain() {
    return this.#order.countCourseMenu(MENU_INFO.MAIN);
  }

  #getCountDessert() {
    return this.#order.countCourseMenu(MENU_INFO.DESSERT);
  }

  getGiveaway() {
    return this.#eventList[0].calcGiveaway();
  }

  getTotalBenefitAmount() {
    return this.#totalBenefitAmount;
  }

  getPayAmount() {
    const payAmount =
      this.#totalAmount -
      this.#totalBenefitAmount +
      this.#eventList[0].getAmount();
    return payAmount;
  }

  getEventBadge() {
    if (this.#totalBenefitAmount >= EVENT_BADGE.SANTA.AMOUNT) {
      return EVENT_BADGE.SANTA.NAME;
    }
    if (this.#totalBenefitAmount >= EVENT_BADGE.TREE.AMOUNT) {
      return EVENT_BADGE.TREE.NAME;
    }
    if (this.#totalBenefitAmount >= EVENT_BADGE.STAR.AMOUNT) {
      return EVENT_BADGE.STAR.NAME;
    }
    return EVENT_BADGE.NA;
  }
}

export default Benefit;
