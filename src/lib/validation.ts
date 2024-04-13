import { RegexPatterns } from 'constant/regex-patterns';
import { Brand } from './type-helper';

type EmailAddress = Brand<string, 'EmailAddress'>;

function isValidEmail(email: string): email is EmailAddress {
  return RegexPatterns.Email.test(email);
}

function isValid(input: string, regex: RegExp): boolean {
  return regex.test(input);
}
function assertValid<T>(input: T, regex: RegExp): asserts input is T {
  if (typeof input !== 'string' && typeof input !== 'number') {
    throw new Error('Input must be a string or number');
  }
  if (!regex.test(String(input))) {
    throw new Error('Input does not match the expected pattern');
  }
}

type PasswordValues = {
  password: string;
  confirmPassword: string;
};

type Valid<T> = Brand<T, 'Valid'>;

function isValidPassword(
  valuse: PasswordValues,
): valuse is Valid<PasswordValues> {
  if (valuse.password !== valuse.confirmPassword) return false;
  return true;
}

function assertIsValidPassword(
  values: PasswordValues,
): asserts values is Valid<PasswordValues> {
  if (values.password !== values.confirmPassword) {
    throw new Error('Password is invalid');
  }
}

export {
  assertValid,
  isValidEmail,
  isValid,
  isValidPassword,
  assertIsValidPassword,
};
