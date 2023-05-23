import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://startup-summer-proxy-production.up.railway.app/2.0/',

  headers: {
    'X-Secret-Key': SECRET_KEY,
    'X-Api-App-Id': CLIENT_SECRET,
  },

  prepareHeaders: (headers) => {
    const authData = localStorage.getItem('authData');

    if (authData) {
      const parsedAuthData = JSON.parse(authData);
      headers.set('Authorization', `${parsedAuthData.token_type} ${parsedAuthData.access_token}`);
    }
  },
});

export default baseQuery;
