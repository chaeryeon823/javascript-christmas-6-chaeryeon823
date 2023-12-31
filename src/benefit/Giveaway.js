import { GIVEAWAY } from "../constant/Benefit.js";
import { MENU_INFO } from "../constant/MenuList.js";
import { BENEFIT_MESSAGE } from "../constant/Log.js";
class Giveaway {
  #totalAmount;
  #amount;

  constructor(totalAmount) {
    this.#totalAmount = totalAmount;
    this.#calcAmount();
  }

  calcGiveaway() {
    if (this.#totalAmount >= GIVEAWAY.CHAMPAGNE.BASEAMOUNT) {
      return GIVEAWAY.CHAMPAGNE.CONTENT;
    }
    return GIVEAWAY.NA;
  }

  #calcAmount() {
    if (this.calcGiveaway() === GIVEAWAY.CHAMPAGNE.CONTENT) {
      this.#amount = MENU_INFO.BEVERAGE.find(
        (menu) => menu.name === GIVEAWAY.CHAMPAGNE.MENUNAME
      ).price;
      return;
    }
    this.#amount = 0;
  }
  getTitle() {
    return BENEFIT_MESSAGE.GIVEAWAY;
  }
  getAmount() {
    return this.#amount;
  }
}

export default Giveaway;
