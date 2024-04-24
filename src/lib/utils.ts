import { type ClassValue, clsx } from 'clsx';

import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ICountDown {
  value: number;
  fn: (val: number) => void;
  delay?: number;
}

// cooldown recursive functionality
// recorsion stops when value reaches 0
const countDown = ({ value, fn, delay = 1000 }: ICountDown) => {
  fn(value);
  return value > 0
    ? setTimeout(() => {
        countDown({ value: value - 1, fn, delay });
      }, delay)
    : value;
};

const deepPick = <T, K extends keyof T>(fields: string, object: T): T[K] => {
  const [first, ...remaining] = fields.split('.');
  const value = object[first as keyof T];
  if (typeof value === 'undefined') {
    throw new Error(`Property '${first}' not found in object`);
  }
  if (remaining.length === 0) {
    return value as T[K];
  }
  if (typeof value !== 'object' || value === null) {
    throw new Error(`Invalid property '${first}'`);
  }
  return deepPick(remaining.join('.'), value as unknown) as T[K];
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
export { capitalize, countDown, deepPick };
