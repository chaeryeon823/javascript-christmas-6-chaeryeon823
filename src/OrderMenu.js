import {ORDER_MENU_COUNT_SPLIT} from "./constant/Log.js";
import {ERROR_MESSAGE} from "./constant/Error.js"
import {MENU_INFO} from "./constant/MenuList.js";
import {Console} from "@woowacourse/mission-utils";

class OrderMenu {
  #name;
  #count;

  constructor(menuInput) {
    const orderMenu = this.#splitMenuInput(menuInput);
    this.#name = orderMenu.name;
    this.#count = orderMenu.count;
    this.#validateContainMenuList();
    this.#validateCount();
  }

  printOrderMenu() {
    Console.print(this.#name + " " + this.#count + "개");
  }

  getCount() {
    return Number(this.#count);
  }

  getName() {
    return this.#name;
  }

  #splitMenuInput(menuInput) {
    const splitOrderMenu = menuInput.split(ORDER_MENU_COUNT_SPLIT);
    this.#validateSplitFormat(splitOrderMenu);
    return {name: splitOrderMenu[0], count: splitOrderMenu[1]};
  }

  #validateSplitFormat(splitOrderMenu) {
    if (splitOrderMenu.length !== 2) {
      throw new Error(ERROR_MESSAGE.MENU + "메뉴 유효 오류");
      //FIXME
    }
  }

  #validateContainMenuList() {
    if (!this.#generateMenuNames().includes(this.#name)) {
      throw new Error(ERROR_MESSAGE.MENU + "메뉴판에 없음");
      //FIXME
    }
  }

  #validateCount() {
    if (isNaN(this.#count) || this.#count < 1) {
      throw new Error(ERROR_MESSAGE.MENU + "메뉴개수 오류");
      //FIXME
    }
  }

  #generateMenuNames() {
    return Object.values(MENU_INFO).reduce((acc, items) => {
      return acc.concat(items.map(item => item.name));
    }, []);
  }

  getMenuPrice() {
    //FIXME
    for(let course of Object.values(MENU_INFO)) {
      let menu = course.find(menu => menu.name === this.#name);
      if(menu !== undefined) {
        return menu.price * this.#count;
      }
    }
  }
}

export default OrderMenu;