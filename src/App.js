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
      const separatedArray = this.input.slice(customIndex + 2).split(customSeparator);
      return separatedArray
    }
    return this.input.split(/,|:/);
  }

  calculateSum() {
    const separatedArray = this.splitInput();
    const resultSum = separatedArray.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    return resultSum;
  }
}

export default App;
