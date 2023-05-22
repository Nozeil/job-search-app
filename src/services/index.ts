import {
  type FetchBaseQueryError,
  type FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
  FetchArgs,
} from '@reduxjs/toolkit/query/react';
import type {
  AuthWithPasswordResponse,
  IndustryCatalogResponse,
  SearchByIdsParams,
  SearchByIdsResponse,
  SearchParams,
  SearchResponse,
  VacancyResponse,
} from '@/models';
import type { BaseQueryFn, QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { LS_KEYS } from '@/constants';

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
const LOGIN = import.meta.env.VITE_LOGIN;
const PASSWORD = import.meta.env.VITE_PASSWORD;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

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

export const api = createApi({
  baseQuery: baseQueryWithReauth,
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
            url: 'oauth2/password',
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

export const {
  useAuthWithPasswordQuery,
  useSearchVacanciesQuery,
  useSearchVacancyByIdQuery,
  useSearchVacanciesByIdsQuery,
  useGetIndustryCatalogQuery,
} = api;
