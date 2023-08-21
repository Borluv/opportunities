import type { Options } from '../types/common';

export const stringifyMultipleSelection = (data: Options): string => {
  const socialMedia = data.socialMedia ? 'Social media' : '';
  const printedSigns = data.printedSigns ? 'Printed signs' : '';
  const recommendation = data.recommendation ? 'Recommendation' : '';
  const advertisement = data.advertisement ? 'Advertisement' : '';
  const other = data.other.selected ? data.other.value : '';

  return [socialMedia, printedSigns, recommendation, advertisement, other].filter((entry) => entry).join('*53P*');
};

export const parseMultipleSelection = (str: string): string[] => str.split('*53P*');
