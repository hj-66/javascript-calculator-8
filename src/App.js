import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from './constants.js';
import {
  validateAllowedCharacters,
  validateCustomDelimiterSyntax,
  validateIsNumber,
} from './validation.js';

class App {
  async run() {
  try {
    await this.getInput();
    Console.print(`${OUTPUT_MESSAGE.OUTPUT_RESULT}${this.calculateSum()}`);
  } catch (error) {
    throw error;
  }
}

  async getInput() {
    this.input = await Console.readLineAsync(INPUT_MESSAGE.INPUT_STRING);
  }

  splitInput() {
    if (!this.input) return [];
     const customDelimiter = validateCustomDelimiterSyntax(this.input);


    if (customDelimiter) {
      const numbersPart = this.input.split('\\n')[1];
      validateAllowedCharacters(numbersPart, customDelimiter);
      return numbersPart.split(customDelimiter);
    }

    validateAllowedCharacters(this.input);
    return this.input.split(/,|:/);
  }

  calculateSum() {
    const separatedArray = this.splitInput();
    separatedArray.forEach((value) => validateIsNumber(value));
    return separatedArray.reduce((sum, value) => sum + parseInt(value, 10), 0);
  }
}

export default App;
