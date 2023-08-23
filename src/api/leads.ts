import { Lead, LeadParams } from '../shared/types/common';

const baseURL = import.meta.env.VITE_API_BASE_URL.concat('leads/');
const baseHeaders = { Accept: 'application/json', 'Content-Type': 'application/json' };

export const createLead = async (leadParams: LeadParams): Promise<Lead> => {
  return await fetch(baseURL, {
    method: 'POST',
    headers: baseHeaders,
    body: JSON.stringify({ lead: leadParams }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) throw new Error(data.error);
      return data;
    });
};
