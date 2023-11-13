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
  printTotalAmount(order) {
    Console.print(OUTPUT_MESSAGE.TOTAL_AMOUNT);
    Console.print(order.calcTotalAmount().toLocaleString("ko-KR") + "원");
  }

  // ...
};

export default OutputView;
