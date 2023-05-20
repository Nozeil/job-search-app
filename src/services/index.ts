import { createSelector } from '@reduxjs/toolkit';
import {
  type FetchBaseQueryError,
  type FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import type { RootState } from '@/redux/store/index.types';
import type {
  AuthWithPasswordResponse,
  IndustryCatalogResponse,
  SearchByIdsParams,
  SearchByIdsResponse,
  SearchParams,
  SearchResponse,
} from '@/models';
import type { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://startup-summer-2023-proxy.onrender.com/2.0/',
    headers: {
      'X-Secret-Key': 'GEU4nvd3rej*jeh.eqp',
      'X-Api-App-Id':
        'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
    },
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const { token, type } = selectTokenData(state);

      if (token) {
        headers.set('Authorization', `${type} ${token}`);
      }
    },
  }),
  endpoints: (builder) => ({
    authWithPassword: builder.query<AuthWithPasswordResponse, void>({
      query: () => ({
        url: 'oauth2/password',
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
    searchVacancies: builder.query<SearchResponse, SearchParams>({
      query: ({ keyword, from, to, catalogues, count, page }) => {
        return {
          url: 'vacancies',
          params: {
            published: 1,
            keyword: keyword || undefined,
            payment_from: from || undefined,
            payment_to: to || undefined,
            no_agreement: from || to ? 1 : undefined,
            catalogues: catalogues ?? undefined,
            count,
            page,
          },
        };
      },
    }),
    searchVacanciesByIds: builder.query<SearchByIdsResponse, SearchByIdsParams>({
      queryFn: async ({ ids, page, count }, _, __, baseQuery) => {
        if (!ids.size) {
          return {
            data: {
              objects: [],
              total: 0,
            },
          };
        } else {
          const result = await baseQuery({
            url: 'vacancies',
            params: {
              published: 1,
              ...ids.ids,
              page,
              count,
            },
          });
          return result as QueryReturnValue<
            SearchByIdsResponse,
            FetchBaseQueryError,
            FetchBaseQueryMeta
          >;
        }
      },
    }),
    getIndustryCatalog: builder.query<IndustryCatalogResponse, void>({
      query: () => ({
        url: 'catalogues',
      }),
    }),
  }),
});

const selectAuthResult = api.endpoints.authWithPassword.select();
const selectTokenData = createSelector(selectAuthResult, (authResult) => ({
  token: authResult?.data?.access_token,
  type: authResult.data?.token_type,
}));

export const {
  useAuthWithPasswordQuery,
  useSearchVacanciesQuery,
  useSearchVacanciesByIdsQuery,
  useGetIndustryCatalogQuery,
} = api;
