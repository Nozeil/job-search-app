import { LS_KEYS, URLS } from '@/constants';
import { AuthWithPasswordResponse } from '@/models';
import { FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { api } from '..';

const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
const LOGIN = import.meta.env.VITE_LOGIN;
const PASSWORD = import.meta.env.VITE_PASSWORD;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

export const authWithPasswordSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    authWithPassword: builder.query<AuthWithPasswordResponse, void>({
      queryFn: async (_, __, ___, baseQuery) => {
        const authData = localStorage.getItem(LS_KEYS.AUTH_DATA);

        if (authData) {
          const parsedAuthData = JSON.parse(authData);
          return {
            data: {
              ...parsedAuthData,
            },
          };
        } else {
          const result = await baseQuery({
            url: URLS.AUTH,
            params: {
              login: LOGIN,
              password: PASSWORD,
              client_id: CLIENT_ID,
              client_secret: CLIENT_SECRET,
              hr: 0,
            },
          });

          if (result.data) {
            localStorage.setItem(LS_KEYS.AUTH_DATA, JSON.stringify(result.data));
          }

          return result as QueryReturnValue<
            AuthWithPasswordResponse,
            FetchBaseQueryError,
            FetchBaseQueryMeta
          >;
        }
      },
    }),
  }),
});

export const { useAuthWithPasswordQuery } = authWithPasswordSlice;
