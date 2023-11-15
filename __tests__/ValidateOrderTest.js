import Order from "../src/Order.js";
import OrderMenu from "../src/OrderMenu.js";

/* eslint-disable no-undef */
describe("주문 예외 테스트", () => {
  test("중복 메뉴를 입력한 경우 예외가 발생한다.", () => {
    expect(() => {
      new Order([new OrderMenu("아이스크림-1"), new OrderMenu("아이스크림-2")]);
    }).toThrow();
  });

  test.each([
    [new OrderMenu("아이스크림-21")],
    [new OrderMenu("아이스크림-10"), new OrderMenu("타파스-11")],
  ])("메뉴 총 개수가 20개 초과한 경우 예외가 발생한다.", (input) => {
    expect(() => {
      new Order(input);
    }).toThrow();
  });

  test("음료만 주문 한 경우 예외가 발생한다.", () => {
    const input = [new OrderMenu("레드와인-1"), new OrderMenu("제로콜라-1")];
    expect(() => {
      new Order(input);
    }).toThrow();
  });
});
