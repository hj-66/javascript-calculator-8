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
      const numbers = this.parseInputToNumbers();
      const sum = this.calculateSum(numbers);
      Console.print(`${OUTPUT_MESSAGE.OUTPUT_RESULT}${sum}`);
    } catch (error) {
      throw error;
    }
  }

  async getInput() {
    this.input = await Console.readLineAsync(INPUT_MESSAGE.INPUT_STRING);
  }

  parseInputToNumbers() {
    if (!this.input) return [];

    const customDelimiter = validateCustomDelimiterSyntax(this.input);

    if (customDelimiter) {
      const numbersPart = this.input.split('\\n')[1];
      validateAllowedCharacters(numbersPart, customDelimiter);
      return this.convertToNumberArray(numbersPart.split(customDelimiter));
    }

    validateAllowedCharacters(this.input);
    return this.convertToNumberArray(this.input.split(/,|:/));
  }

  convertToNumberArray(values) {
    return values.map((value) => {
      validateIsNumber(value);
      return parseInt(value, 10);
    });
  }

  calculateSum(numbers) {
    return numbers.reduce((sum, value) => sum + value, 0);
  }
}

export default App;
