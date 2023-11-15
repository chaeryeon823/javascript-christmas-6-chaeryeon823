import { ERROR_MESSAGE } from "./constant/Error.js";
import { MENU_INFO } from "./constant/MenuList.js";

const MAX_MENU_COUNT = 20;

class Order {
  #orderMenus;

  constructor(orderMenus) {
    this.#orderMenus = orderMenus;
    this.#validateMaxMenuCount();
    this.#validateDuplicateMenu();
    this.#validateOnlyBeverage();
  }

  #validateMaxMenuCount() {
    if (this.#calcTotalMenuCount() > MAX_MENU_COUNT) {
      throw new Error(ERROR_MESSAGE.MENU);
    }
  }

  #validateDuplicateMenu() {
    let menuNames = this.#generateMenuNames();
    let setMenuNames = new Set(menuNames);
    if (menuNames.length !== setMenuNames.size) {
      throw new Error(ERROR_MESSAGE.MENU);
    }
  }

  #validateOnlyBeverage() {
    let menuNames = this.#generateMenuNames();
    if (
      menuNames.every((menu) =>
        this.#generateCourseNames(MENU_INFO.BEVERAGE).includes(menu)
      )
    ) {
      throw new Error(ERROR_MESSAGE.MENU);
    }
  }

  #calcTotalMenuCount() {
    let totalCount = 0;
    this.#orderMenus.forEach((orderMenu) => {
      totalCount += orderMenu.getCount();
    });
    return totalCount;
  }

  #generateMenuNames() {
    let menuNames = [];
    this.#orderMenus.forEach((menuName) => {
      menuNames.push(menuName.getName());
    });
    return menuNames;
  }

  #generateCourseNames(course) {
    let courseNames = [];
    Object.values(course).forEach((menu) => {
      courseNames.push(menu.name);
    });
    return courseNames;
  }

  getOrder() {
    return this.#orderMenus;
  }

  calcTotalAmount() {
    return this.#orderMenus.reduce((sum, orderMenu) => {
      return sum + orderMenu.getMenuPrice();
    }, 0);
  }

  countCourseMenu(course) {
    const courseNames = this.#generateCourseNames(course);
    return this.#orderMenus.reduce((count, orderMenu) => {
      if (courseNames.includes(orderMenu.getName())) {
        return count + orderMenu.getCount();
      }
      return count;
    }, 0);
  }
}

export default Order;
