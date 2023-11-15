import OrderMenu from "../src/OrderMenu";

/* eslint-disable no-undef */
describe("주문 각 메뉴별 테스트", () => {
  test("메뉴판에 없는 메뉴를 입력하면 예외가 발생한다.", () => {
    const input = "abc-1";
    expect(() => {
      new OrderMenu(input);
    }).toThrow();
  });

  test.each([["아이스크림-0"], ["아이스크림-a"]])(
    "메뉴의 개수가 1이상의 자연수가 아닌 경우 예외가 발생한다.",
    (input) => {
      expect(() => {
        new OrderMenu(input);
      }).toThrow();
    }
  );

  test.each([["아이스크림-"], ["아이스크림1"], ["아이스크림*1"]])(
    "메뉴형식이 다른 경우 예외가 발생한다.",
    (input) => {
      expect(() => {
        new OrderMenu(input);
      }).toThrow();
    }
  );
  test("메뉴를 바르게 입력한 경우", () => {
    const input = "아이스크림-1";
    const name = "아이스크림";
    const count = 1;

    expect(new OrderMenu(input).getName()).toEqual(name);
    expect(new OrderMenu(input).getCount()).toEqual(count);
  });
});
