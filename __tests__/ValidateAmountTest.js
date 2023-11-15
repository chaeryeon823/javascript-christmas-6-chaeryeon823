import Benefit from "../src/Benefit";
import Order from "../src/Order";
import OrderMenu from "../src/OrderMenu";

/* eslint-disable no-undef */
describe("주문 메뉴 총 합계 금액 테스트", () => {
  test("주문 메뉴 총 합계 금액", () => {
    const input = [
      new OrderMenu("레드와인-1"),
      new OrderMenu("타파스-2"),
      new OrderMenu("티본스테이크-1"),
    ];
    const result = 126000;
    expect(new Order(input).calcTotalAmount()).toEqual(result);
  });
});

describe("총혜택 금액 테스트", () => {
  test("총혜택 금액", () => {
    const order = new Order([
      new OrderMenu("시저샐러드-1"),
      new OrderMenu("바비큐립-2"),
      new OrderMenu("타파스-1"),
      new OrderMenu("초코케이크-1"),
    ]);
    const totalAmount = order.calcTotalAmount();
    const date = 5;
    const result = 28423;
  });
});
