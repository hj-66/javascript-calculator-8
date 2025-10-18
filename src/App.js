import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants.js";

class App {
  async run() {
    await this.getInput();
  }

  async getInput() {
    this.input = await Console.readLineAsync(INPUT_MESSAGE.INPUT_STRING);
  }

  splitInput() {
    if (!this.input) return [];
    if (this.input.startsWith('//')) {
      const customIndex = this.input.indexOf('\\n'); 
      const customSeparator = this.input.slice(2,customIndex);
      const separatedIndex = this.input.slice(customIndex + 2).split(customSeparator);
      return separatedIndex
    }
    return this.input.split(/,|:/);
  }
}

export default App;
