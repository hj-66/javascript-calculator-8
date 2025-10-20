import { MESSAGES } from './constants.js';

export const validateAllowedCharacters = (numbersPart, customDelimiter) => {
  const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = customDelimiter
    ? new RegExp(`[^0-9${escapeRegex(customDelimiter)}]`)
    : /[^0-9,:]/;

  if (pattern.test(numbersPart)) {
    throw new Error(MESSAGES.ERROR.CHARACTER_ERROR_MESSAGE);
  }
}

export const validateIsNumber = (str) => {
  const isValidNumber = /^\d+$/.test(str);
  if (!isValidNumber) {
    throw new Error(MESSAGES.ERROR.NUMBER_ERROR_MESSAGE);
  }
}

export const validateCustomDelimiterSyntax = (input) => {
  const hasCustomDelimiter = input.startsWith("//");
  if (!hasCustomDelimiter) return null;

  const hasNewLine = input.includes("\\n");
  if (!hasNewLine) {
    throw new Error(MESSAGES.ERROR.CUSTOM_SETTING_ERROR_MESSAGE);
  }

  const [delimiterPart] = input.split("\\n");
  const match = /^\/\/(.+)$/.exec(delimiterPart);

  if (!match) {
    throw new Error(MESSAGES.ERROR.CUSTOM_SETTING_ERROR_MESSAGE);
  }

  const delimiter = match[1];

  if (/^\d+$/.test(delimiter)) {
    throw new Error(MESSAGES.ERROR.CUSTOM_ERROR_MESSAGE);
  }

  return delimiter;
}