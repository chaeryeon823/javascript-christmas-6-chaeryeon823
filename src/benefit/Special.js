const SPECIAL_BENEFIT = 1000;
const SUNDAY = 0;
const CHRISTMAS = 25;

class Special {
  #date;
  #day;
  #amount;

  constructor(date, day) {
    this.#date = date;
    this.#day = day;
    this.#calcAmount();
  }

  #calcAmount() {
    if (this.#day === SUNDAY || this.#date === CHRISTMAS) {
      this.#amount = SPECIAL_BENEFIT;
      return;
    }
    this.#amount = 0;
  }

  getAmount() {
    return this.#amount;
  }
}

export default Special;
