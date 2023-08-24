const baseURL = import.meta.env.VITE_API_BASE_URL;
const appHeaders = { Accept: 'application/json', 'Content-Type': 'application/json' };

export const fetchInterests = (): string => "I'll leave it like this for now...";

export const createInterest = async (leadId: string, assetId: string): Promise<void> => {
  await fetch(`${baseURL}leads/${leadId}/interests`, {
    method: 'POST',
    headers: appHeaders,
    body: JSON.stringify({
      interest: { asset_id: assetId },
    }),
  })
    .then((response) => response.json())
    .then((data) => data);
};
