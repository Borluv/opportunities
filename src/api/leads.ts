import type { Lead, LeadParams } from '../shared/types/common';

const baseURL = import.meta.env.VITE_API_BASE_URL.concat('leads/');
const baseHeaders = { Accept: 'application/json', 'Content-Type': 'application/json' };

export const fetchLeads = async (): Promise<Lead[]> => {
  const Authorization = localStorage.getItem('auth') || '';
  const headers = { ...baseHeaders, Authorization };

  return await fetch(baseURL, { method: 'GET', headers })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) throw new Error(data.error);
      return data;
    });
};

export const createLead = async (leadParams: LeadParams): Promise<Lead> =>
  await fetch(baseURL, {
    method: 'POST',
    headers: baseHeaders,
    body: JSON.stringify({ lead: leadParams }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) throw new Error(data.error);
      return data;
    });
