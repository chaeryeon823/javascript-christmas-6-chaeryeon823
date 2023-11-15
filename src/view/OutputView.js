import {Console} from "@woowacourse/mission-utils";
import {OUTPUT_MESSAGE} from "../constant/Log.js";

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.START);
  },
  printDatePreview(date) {
    Console.print("12월 " + date + "일" + OUTPUT_MESSAGE.DATE_PREVIEW);
  },
  printMenu(order) {
    Console.print(OUTPUT_MESSAGE.ORDER_MENU);
    order.printOrder();
  },
  printTotalAmount(totalAmount) {
    Console.print(OUTPUT_MESSAGE.TOTAL_AMOUNT);
    Console.print(totalAmount.toLocaleString("ko-KR") + "원");
  },
  printGiveaway(benefit) {
    Console.print(OUTPUT_MESSAGE.GIVEAWAY);
    benefit.printGiveaway();
  },
  printBenefit(benefit) {
    Console.print(OUTPUT_MESSAGE.BENEFIT);
    benefit.printBenefit();
  },
  printTotalBenefitAmount(benefit) {
    Console.print(OUTPUT_MESSAGE.BENEFIT_TOTAL_AMOUNT);
    benefit.printTotalBenefitAmount();
  },
  printPayAmount(benefit) {
    Console.print(OUTPUT_MESSAGE.PAY_AMOUNT);
    benefit.printPayAmount();
  },
  printEventBadge(benefit) {
    Console.print(OUTPUT_MESSAGE.EVENT_BADGE);
    benefit.printEventBadge();
  }

};

export default OutputView;
