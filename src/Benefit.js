import {GIVEAWAY} from "./constant/Benefit.js";

class Benefit {
  #totalAmount;
  #totalBenefit;
  #date

  constructor(totalAmount, date) {
    this.#totalAmount = totalAmount;
    this.#date = date;
  }

  calcGiveaway() {
    if (this.#totalAmount >= GIVEAWAY.CHAMPAGNE.BASEAMOUNT) {
      return GIVEAWAY.CHAMPAGNE.CONTENT;
    }
    return GIVEAWAY.NA;
  }

  //TODO 증정이벤트할인
  //TODO 크리스마스 디데이할인
  //TODO 평일할인
  //TODO 주말할인
  //TODO 특별할인
}

export default Benefit;