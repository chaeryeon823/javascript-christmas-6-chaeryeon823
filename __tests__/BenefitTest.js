import ChristmasDay from "../src/benefit/ChristmasDay.js";
import Giveaway from "../src/benefit/Giveaway.js";
import Special from "../src/benefit/Special.js";
import Weekday from "../src/benefit/Week.js";
import Order from "../src/Order.js";
import OrderMenu from "../src/OrderMenu.js";
import Benefit from "../src/Benefit.js";

/* eslint-disable no-undef */
describe("크리스마스 디데이 혜택", () => {
  test("25일 이후인 경우", () => {
    const date = 26;
    const result = 0;
    expect(new ChristmasDay(date).getAmount()).toEqual(result);
  });
  test("25일인 경우", () => {
    const date = 25;
    const result = 3400;
    expect(new ChristmasDay(date).getAmount()).toEqual(result);
  });
  test.each([
    [1, 1000],
    [25, 3400],
    [13, 2200],
  ])("1 ~ 25일 사이인 경우", (input, output) => {
    expect(new ChristmasDay(input).getAmount()).toEqual(output);
  });
});

describe("증정 혜택", () => {
  test.each([
    [119999, 0],
    [120001, 25000],
    [120000, 25000],
  ])("총주문 금액별 증정 혜택 금액", (input, output) => {
    expect(new Giveaway(input).getAmount()).toEqual(output);
  });
  test.each([
    [119999, "없음"],
    [120001, "샴페인 1개"],
    [120000, "샴페인 1개"],
  ])("총주문 금액별 증정 혜택 문구", (input, output) => {
    expect(new Giveaway(input).calcGiveaway()).toEqual(output);
  });
});

describe("주말 혜택", () => {
  const daylist = "WEEKEND";
  test.each([
    [5, 1, 2023],
    [6, 0, 0],
    [5, 3, 6069],
  ])("주말 혜택 금액", (day, mainMenuCount, output) => {
    expect(new Weekday(day, mainMenuCount, daylist).getAmount()).toEqual(
      output
    );
  });
});

describe("평일 혜택", () => {
  const daylist = "WEEKDAY";
  test.each([
    [0, 1, 2023],
    [2, 0, 0],
    [3, 2, 4046],
  ])("주말 혜택 금액", (day, dessearMenuCount, output) => {
    expect(new Weekday(day, dessearMenuCount, daylist).getAmount()).toEqual(
      output
    );
  });
});

describe("특별 혜택", () => {
  test.each([
    [25, 1, 1000],
    [3, 0, 1000],
    [11, 1, 0],
  ])("주말 혜택 금액", (date, day, output) => {
    expect(new Special(date, day).getAmount()).toEqual(output);
  });
});

describe("12월 이벤트 배지 혜택", () => {
  test("배지가 없는 경우", () => {
    const order = new Order([new OrderMenu("해산물파스타-1")]);
    const date = 3;
    const totalAmount = order.calcTotalAmount();
    const result = "없음";
    expect(new Benefit(totalAmount, date, order).getEventBadge()).toEqual(
      result
    );
  });
  test("배지가 별인 경우", () => {
    const order = new Order([new OrderMenu("바비큐립-2")]);
    const date = 16;
    const totalAmount = order.calcTotalAmount();
    const result = "별";
    expect(new Benefit(totalAmount, date, order).getEventBadge()).toEqual(
      result
    );
  });
  test("배지가 트리인 경우", () => {
    const order = new Order([
      new OrderMenu("초코케이크-5"),
      new OrderMenu("타파스-1"),
    ]);
    const date = 6;
    const totalAmount = order.calcTotalAmount();
    const result = "트리";
    expect(new Benefit(totalAmount, date, order).getEventBadge()).toEqual(
      result
    );
  });
  test("배지가 산타인 경우", () => {
    const order = new Order([
      new OrderMenu("해산물파스타-1"),
      new OrderMenu("크리스마스파스타-1"),
      new OrderMenu("타파스-1"),
      new OrderMenu("아이스크림-1"),
      new OrderMenu("레드와인-1"),
    ]);
    const date = 17;
    const totalAmount = order.calcTotalAmount();
    const result = "산타";
    expect(new Benefit(totalAmount, date, order).getEventBadge()).toEqual(
      result
    );
  });
});
