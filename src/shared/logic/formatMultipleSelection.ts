import type { Options } from '../types/common';

export const stringifyMultipleSelection = (data: Options): string => {
  const hello = data.hello ? 'Hello!' : '';
  const bye = data.bye ? 'Bye!' : '';
  const other = data.other.selected ? data.other.value : '';

  return [hello, bye, other].filter((entry) => entry).join('*53P*');
};

export const parseMultipleSelection = (str: string): string[] => str.split('*53P*');
