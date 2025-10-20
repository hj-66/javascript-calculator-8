import { ERROR_MESSAGE } from "./constants.js";

export function validateAllowedCharacters(input, customDelimiter = null) {

  const allowed = [',', ':', ... (customDelimiter ? [customDelimiter] : [])];

  for (const ch of input) {
    if (!/[0-9]/.test(ch) && !allowed.includes(ch)) {
      throw new Error(ERROR_MESSAGE.CUSTOM_ERROR_MESSAGE);
    }
  }
}

export function validateIsNumber(str) {
  if (!/^\d+$/.test(str)) {
    throw new Error(ERROR_MESSAGE.NUMBER_ERROR_MESSAGE);
  }
}

export function validateCustomDelimiterSyntax(input) {
  if (input.startsWith('//')) {
    if (!input.includes('\\n')) {
      throw new Error(ERROR_MESSAGE.CUSTOMSETTING_ERROR_MESSAGE);
    }

    const delimiterPart = input.split('\\n')[0];

    const match = /^\/\/(.)$/.exec(delimiterPart);
    if (!match) {
      throw new Error(ERROR_MESSAGE.CUSTOMSETTING_ERROR_MESSAGE);
    }

    const delimiter = match[1];

    if (!isNaN(delimiter)) {
      throw new Error(ERROR_MESSAGE.CUSTOM_ERROR_MESSAGE);
    }

    return delimiter;
  }
  return null;
}