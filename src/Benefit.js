import {MENU_INFO} from "./constant/MenuList.js";
import {Console} from "@woowacourse/mission-utils";
import ChristmasDay from "./benefit/ChristmasDay.js";
import Weekday from "./benefit/Week.js";
import Special from "./benefit/Special.js";
import Giveaway from "./benefit/Giveaway.js";
import {EVENT_BADGE} from "./constant/Benefit.js";

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
    //FIXME
    eventList.push(new Giveaway(this.#totalAmount));
    eventList.push(new ChristmasDay(dateObj.getDate()));
    eventList.push(new Weekday(dateObj.getDay(), this.#getCountDessert(), "WEEKDAY"))
    eventList.push(new Weekday(dateObj.getDay(), this.#getCountMain(), "WEEKEND"));
    eventList.push(new Special(dateObj.getDate(), dateObj.getDay()));

    return eventList;
  }

  printBenefit() {
    if (this.#totalAmount >= BENEFIT_STANDARD && this.#totalBenefitAmount > 0) {
      this.#printOverBenefitStandard();
      return;
    }
    this.#printNoBenefit();
  }

  #printNoBenefit() {
    Console.print("없음");
  }

  #printOverBenefitStandard() {
    this.#eventList.forEach(event => {
      event.print();
    });
  }

  #calcTotalBenefitAmount() {
    return this.#eventList
      .reduce((sum, event) => {
        return sum + event.getAmount();
      }, 0);
  }

  #getCountMain() {
    return this.#order.countCourseMenu(MENU_INFO.MAIN);
  }

  #getCountDessert() {
    return this.#order.countCourseMenu(MENU_INFO.DESSERT);
  }

  printGiveaway() {
    Console.print(this.#eventList[0].calcGiveaway());
  }

  printTotalBenefitAmount() {
    Console.print("-" + this.#totalBenefitAmount.toLocaleString("ko-KR") + "원");
  }

  printPayAmount() {
    //FIXME
    const payAmount = this.#totalAmount - this.#totalBenefitAmount + this.#eventList[0].getAmount();
    Console.print(payAmount.toLocaleString("ko-KR") + "원");
  }

  printEventBadge() {
    if (this.#totalBenefitAmount >= EVENT_BADGE.SANTA.AMOUNT) {
      Console.print(EVENT_BADGE.SANTA.NAME);
      return;
    }
    if (this.#totalBenefitAmount >= EVENT_BADGE.TREE.AMOUNT) {
      Console.print(EVENT_BADGE.TREE.NAME);
      return;
    }
    if (this.#totalBenefitAmount >= EVENT_BADGE.STAR.AMOUNT) {
      Console.print(EVENT_BADGE.STAR.NAME);
      return;
    }
    Console.print(EVENT_BADGE.NA);

  }
}

export default Benefit;