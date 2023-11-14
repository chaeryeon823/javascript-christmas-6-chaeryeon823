import {GIVEAWAY} from "./constant/Benefit.js";
import {MENU_INFO} from "./constant/MenuList.js";
import {Console} from "@woowacourse/mission-utils";

const WEEK_BENEFIT = 2023;
const SPECIAL_BENEFIT = 1000;
const DDAY_BENEFIT_STANDARD = 1000;
const DDAY_BENEFIT = 100
const BENEFIT_STANDARD = 10000;
const WEEKEND = [5, 6];
const WEEKDAY = [0, 1, 2, 3, 4];
const BENEFIT_YEAR = 2023;
const BENEFIT_MONTH = 12;
const SUNDAY = 0;
const CHRISTMAS = 25;

class Benefit {
  #totalAmount;
  #totalBenefit;
  #date
  #order

  constructor(totalAmount, date, order) {
    this.#totalAmount = totalAmount;
    this.#date = date;
    this.#order = order;
  }

  calcGiveaway() {
    if (this.#totalAmount >= GIVEAWAY.CHAMPAGNE.BASEAMOUNT) {
      return GIVEAWAY.CHAMPAGNE.CONTENT;
    }
    return GIVEAWAY.NA;
  }

  calcGivawayAmount() {
    if (this.calcGiveaway() === GIVEAWAY.CHAMPAGNE.CONTENT) {
      return MENU_INFO.BEVERAGE.find((menu) => menu.name === GIVEAWAY.CHAMPAGNE.MENUNAME).price;
    }
    return 0;
  }

  printBenefit() {
    if (this.#totalAmount >= BENEFIT_STANDARD) {
      this.printOverBenefitStandard();
      return;
    }
    this.printNoBenefit();
  }

  printNoBenefit() {
    Console.print("없음");
  }

  printOverBenefitStandard() {
    const dateObj = new Date(BENEFIT_YEAR, BENEFIT_MONTH - 1, this.#date);
    //크리스마스디데이
    Console.print("크리스마스 디데이 할인: -" + this.calcChristmasDday().toLocaleString("ko-KR") + "원");
    //평일
    if (WEEKDAY.includes(dateObj.getDay())) {
      Console.print("평일 할인 : -" + this.calcWeekday().toLocaleString("ko-KR") + "원");
    }
    //주말
    if (WEEKEND.includes(dateObj.getDay())) {
      Console.print("주말 할인 : -" + this.calcWeekend().toLocaleString("ko-KR") + "원");
    }
    //특별할인
    if (dateObj.getDay() === SUNDAY || dateObj.getDate() === CHRISTMAS) {
      Console.print("특별 할인 : -" + this.calcSpecial().toLocaleString("ko-KR") + "원")
    }
    //증정
    if (this.calcGivawayAmount() !== 0) {
      Console.print("증명 할인 : -" + this.calcGivawayAmount().toLocaleString("ko-KR") + "원");
    }
  }

  calcChristmasDday() {
    return DDAY_BENEFIT_STANDARD + (this.#date * DDAY_BENEFIT) - DDAY_BENEFIT;
  }

  calcWeekday() {
    return this.#order.countCourseMenu(MENU_INFO.DESSERT) * WEEK_BENEFIT;
  }

  calcWeekend() {
    return this.#order.countCourseMenu(MENU_INFO.MAIN) * WEEK_BENEFIT;
  }

  calcSpecial() {
    return SPECIAL_BENEFIT;
  }
}

export default Benefit;