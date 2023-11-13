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
    Console.print(this.#name);
    if (!this.#getMenuNames().includes(this.#name)) {
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

  #getMenuNames() {
    return Object.values(MENU_INFO).reduce((acc, items) => {
      return acc.concat(items.map(item => item.name));
    }, []);
  }
}

export default OrderMenu;