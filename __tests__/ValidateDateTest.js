import validateDate from "../src/validator/ValidateDate";

/* eslint-disable no-undef */
describe("날짜 테스트", () => {
  test.each([["0"], ["32"], [" "], ["a"], ["-1"]])(
    "날짜가 1 ~ 31 사이의 자연수가 아닌 경우, 예외가 발생한다.",
    (input) => {
      expect(() => {
        validateDate(input);
      }).toThrow();
    }
  );
  test("날짜가 바르게 입력된 경우", () => {
    const input = "31";
    const result = 31;
    expect(validateDate(input)).toEqual(result);
  });
});
