import type { Property } from '../shared/types/common';

const baseURL = import.meta.env.VITE_API_BASE_URL.concat('assets/');
const headers = { Accept: 'application/json', 'Content-Type': 'application/json' };

export const fetchAssets = async (): Promise<Property[]> =>
  await fetch(baseURL, { method: 'GET', headers })
    .then((response) => response.json())
    .then((data) => data);

export const pickAsset = async (assetId: string | undefined): Promise<Property> => {
  if (!assetId) throw new Error('Missing params');

  return await fetchAssets().then((assets) => {
    const asset = assets.filter((asset) => asset.nickname === assetId)[0];

    if (!asset) throw new Error('Property not found');
    return asset;
  });
};
