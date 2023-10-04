import type { UserData } from '../shared/types/common';
import { redirect } from 'react-router-dom';

const url = import.meta.env.VITE_API_BASE_URL.concat('users/me/');
const appHeaders = { Accept: 'application/json', 'Content-Type': 'application/json' };

const isSessionActive = async (): Promise<UserData> => {
  const Authorization = localStorage.getItem('auth') || '';
  const headers = { ...appHeaders, Authorization };

  return await fetch(url, { method: 'GET', headers })
    .then((response) => {
      if (response.status === 401) {
        localStorage.removeItem('auth');
        localStorage.removeItem('currentUser');
        return redirect('/admin/properties');
      }

      return response.json();
    })
    .then((data) => {
      if (data.error) throw new Error(data.error);
      return data;
    });
};

export default isSessionActive;
