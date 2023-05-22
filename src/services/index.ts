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
  VacancyResponse,
} from '@/models';
import type { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
const LOGIN = import.meta.env.VITE_LOGIN;
const PASSWORD = import.meta.env.VITE_PASSWORD;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://startup-summer-proxy-production.up.railway.app/2.0/',
    headers: {
      'X-Secret-Key': SECRET_KEY,
      'X-Api-App-Id': CLIENT_SECRET,
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
          login: LOGIN,
          password: PASSWORD,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
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
    searchVacancyById: builder.query<VacancyResponse, string>({
      query: (id) => {
        return {
          url: `vacancies/${id}/`,
          params: {
            published: 1,
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
  useSearchVacancyByIdQuery,
  useSearchVacanciesByIdsQuery,
  useGetIndustryCatalogQuery,
} = api;
