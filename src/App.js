import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants.js";

class App {
  async run() {
    await this.getInput();
  }

  async getInput() {
    this.input = await Console.readLineAsync(INPUT_MESSAGE.INPUT_STRING);
  }
}

export default App;
