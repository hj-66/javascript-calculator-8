import { ERROR_MESSAGE } from "./constants.js";

export const validateAllowedCharacters = (numbersPart, customDelimiter) => {
  const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = customDelimiter
    ? new RegExp(`[^0-9${escapeRegex(customDelimiter)}]`)
    : /[^0-9,:]/;

  if (pattern.test(numbersPart)) {
    throw new Error(ERROR_MESSAGE.CHARACTER_ERROR_MESSAGE);
  }
}

export const validateIsNumber = (str) => {
  if (!/^\d+$/.test(str)) {
    throw new Error(ERROR_MESSAGE.NUMBER_ERROR_MESSAGE);
  }
}

export const validateCustomDelimiterSyntax = (input) => {
  if (input.startsWith('//')) {
    if (!input.includes('\\n')) {
      throw new Error(ERROR_MESSAGE.CUSTOMSETTING_ERROR_MESSAGE);
    }

    const delimiterPart = input.split('\\n')[0];
    const match = /^\/\/(.+)$/.exec(delimiterPart);

    if (!match) {
      throw new Error(ERROR_MESSAGE.CUSTOMSETTING_ERROR_MESSAGE);
    }

    const delimiter = match[1];

    if (/^\d+$/.test(delimiter)) {
      throw new Error(ERROR_MESSAGE.CUSTOM_ERROR_MESSAGE);
    }

    return delimiter;
  }

  return null;
}