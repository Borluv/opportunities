import type { Options } from '../types/common';

export const stringifyMultipleSelection = (data: Options): string => {
  const sm = data.sm ? 'Social media' : '';
  const dbp = data.dbp ? 'Drive by property' : '';
  const oa = data.oa ? 'Online advertisement' : '';
  const ce = data.ce ? 'Conference or event' : '';
  const em = data.em ? 'Email' : '';
  const br = data.br ? 'Broker or Realtor' : '';
  const other = data.other.selected ? data.other.value : '';

  return [sm, dbp, oa, ce, em, br, other].filter((entry) => entry).join('*53P*');
};

export const parseMultipleSelection = (str: string): string[] => str.split('*53P*');
