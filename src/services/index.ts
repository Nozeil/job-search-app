import { AuthWithPasswordResponse } from '@/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://startup-summer-2023-proxy.onrender.com/',
    headers: {
      'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
    },
  }),
  endpoints: (builder) => ({
    authWithPassword: builder.query<AuthWithPasswordResponse, void>({
      query: () => ({
        url: '2.0/oauth2/password',
        params: {
          login: 'sergei.stralenia@gmail.com',
          password: 'paralect123',
          client_id: 2356,
          client_secret:
            'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
          hr: 0,
        },
      }),
    }),
    searchVacancies: builder.query<void, string>({
      query: (keyword) => ({
        url: 'vacancies',
        params: {
          keyword,
        },
      }),
    }),
  }),
});

export const { useAuthWithPasswordQuery, useSearchVacanciesQuery, useLazySearchVacanciesQuery } =
  api;
