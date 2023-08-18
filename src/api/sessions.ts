import type { Creds } from '../shared/types/common';

const url = 'http://localhost:3000/auth/';
const appHeaders = { Accept: 'application/json', 'Content-Type': 'application/json' };

export const signUserIn = async (creds: Creds): Promise<void> =>
  await fetch(url.concat('log_in'), {
    method: 'POST',
    headers: appHeaders,
    body: JSON.stringify({ user: creds }),
  })
    .then((response) => {
      const auth = response.headers.get('Authorization');

      if (auth) localStorage.setItem('auth', auth);

      return response.json();
    })
    .then((data) => {
      if (data.error) throw new Error('data');

      localStorage.setItem('currentUser', JSON.stringify(data));
    });

export const signUserOut = async (): Promise<void> => {
  const Authorization = localStorage.getItem('auth') || '';
  const headers = { ...appHeaders, Authorization };

  return await fetch(url.concat('log_out'), {
    method: 'DELETE',
    headers,
  })
    .then((response) => {
      if (response.ok) return response;

      return response.json();
    })
    .then((data) => {
      if (data.error) throw new Error(data.error);

      localStorage.clear();
    });
};

export const isUserSignedIn = (): boolean =>
  localStorage.getItem('auth') !== null && localStorage.getItem('currentUser') !== null;
