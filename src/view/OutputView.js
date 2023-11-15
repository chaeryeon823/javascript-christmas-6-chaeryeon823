import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constant/Log.js";

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.START);
  },
  printDatePreview(date) {
    Console.print("12월 " + date + "일" + OUTPUT_MESSAGE.DATE_PREVIEW);
  },
  printMenu(order) {
    Console.print(OUTPUT_MESSAGE.ORDER_MENU);
    order.getOrder().forEach((orderMenu) => {
      Console.print(orderMenu.getName() + " " + orderMenu.getCount() + "개");
    });
  },
  printTotalAmount(totalAmount) {
    Console.print(OUTPUT_MESSAGE.TOTAL_AMOUNT);
    Console.print(totalAmount.toLocaleString("ko-KR") + "원");
  },
  printGiveaway(benefit) {
    Console.print(OUTPUT_MESSAGE.GIVEAWAY);
    Console.print(benefit.getGiveaway());
  },
  printBenefit(benefit) {
    Console.print(OUTPUT_MESSAGE.BENEFIT);
    if (benefit.isBenefit()) {
      this.printBenefitTrue(benefit);
      return;
    }
    Console.print("없음");
  },
  printBenefitTrue(benefit) {
    benefit.getBenefit().forEach((event) => {
      if (event.getAmount() !== 0) {
        Console.print(
          event.getTitle() + event.getAmount().toLocaleString("ko-KR") + "원"
        );
      }
    });
  },
  printTotalBenefitAmount(benefit) {
    Console.print(OUTPUT_MESSAGE.BENEFIT_TOTAL_AMOUNT);
    Console.print(
      "-" + benefit.getTotalBenefitAmount().toLocaleString("ko-KR") + "원"
    );
  },
  printPayAmount(benefit) {
    Console.print(OUTPUT_MESSAGE.PAY_AMOUNT);
    Console.print(benefit.getPayAmount().toLocaleString("ko-KR") + "원");
  },
  printEventBadge(benefit) {
    Console.print(OUTPUT_MESSAGE.EVENT_BADGE);
    Console.print(benefit.getEventBadge());
  },
};

export default OutputView;
