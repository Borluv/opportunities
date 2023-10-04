import type { Interest } from '../shared/types/common';

const baseURL = import.meta.env.VITE_API_BASE_URL;
const appHeaders = { Accept: 'application/json', 'Content-Type': 'application/json' };

export const fetchLeadInterests = async (leadId: string): Promise<Interest[]> => {
  const Authorization = localStorage.getItem('auth') || '';
  const headers = { ...appHeaders, Authorization };

  return await fetch(`${baseURL}leads/${leadId}/interests`, { method: 'GET', headers })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) throw new Error(data.error);
      return data;
    });
};

export const createInterest = async (leadId: string, assetId: string): Promise<void> => {
  await fetch(`${baseURL}leads/${leadId}/interests`, {
    method: 'POST',
    headers: appHeaders,
    body: JSON.stringify({
      interest: { asset_id: assetId },
    }),
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then((data) => data);
};
