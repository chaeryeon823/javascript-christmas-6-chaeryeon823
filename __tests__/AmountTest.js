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
    expect(
      new Benefit(totalAmount, date, order).getTotalBenefitAmount()
    ).toEqual(result);
  });

  test("주문 메뉴 합계 금액이 10,000원 이하일 경우, 혜택 없음", () => {
    const order = new Order([new OrderMenu("타파스-1")]);
    const totalAmount = order.calcTotalAmount();
    const date = 12;
    const result = false;
    expect(new Benefit(totalAmount, date, order).isBenefit()).toEqual(result);
  });

  test("주문 메뉴 합계 금액이 10,000원 이상일 경우, 혜택 있음", () => {
    const order = new Order([new OrderMenu("해산물파스타-1")]);
    const totalAmount = order.calcTotalAmount();
    const date = 12;
    const result = true;
    expect(new Benefit(totalAmount, date, order).isBenefit()).toEqual(result);
  });
});

describe("할인 후 결제 예상 금액 테스트", () => {
  test("할인 후 결제 예상 금액", () => {
    const order = new Order([
      new OrderMenu("티본스테이크-1"),
      new OrderMenu("바비큐립-1"),
      new OrderMenu("레드와인-1"),
      new OrderMenu("아이스크림-1"),
    ]);
    const totalAmount = order.calcTotalAmount();
    const date = 10;
    // total = 174000
    // 크리스마스 = 1900
    // 특별 = 1000
    // 평일 = 2023
    // 총혜택 금액 = 4923
    const result = 169077;
    expect(new Benefit(totalAmount, date, order).getPayAmount()).toEqual(
      result
    );
  });
});
