import { LS_KEYS } from '@/constants';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import baseQuery from './baseQuery';

const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const authData = localStorage.getItem(LS_KEYS.AUTH_DATA);

  if (authData) {
    const parsedAuthData = JSON.parse(authData);

    if (parsedAuthData.ttl < Date.now() / 1000) {
      const refreshResult = await baseQuery(
        {
          url: 'oauth2/refresh_token',
          params: {
            refresh_token: parsedAuthData.refresh_token,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
          },
        },
        api,
        extraOptions
      );

      if (refreshResult.data) {
        localStorage.setItem(LS_KEYS.AUTH_DATA, JSON.stringify(refreshResult.data));
      }
    }
  }

  const result = await baseQuery(args, api, extraOptions);

  return result;
};

export default baseQueryWithReauth;
