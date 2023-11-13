import {Console} from "@woowacourse/mission-utils";
import {OUTPUT_MESSAGE} from "../constant/Log.js";

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.START);
  },
  printDatePreview(date) {
    Console.print("12월 " + date + "일" + OUTPUT_MESSAGE.DATE_PREVIEW);
  },
  printMenu() {
    Console.print("<주문 메뉴>");
    // 주문 메뉴 내역 출력 함수
  },

  // ...
};

export default OutputView;
