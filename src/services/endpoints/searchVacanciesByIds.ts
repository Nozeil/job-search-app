import { SearchByIdsResponse, SearchByIdsParams } from '@/models';
import { FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { api } from '..';
import { URLS } from '@/constants';

export const searchVacanciesByIdsSlice = api.injectEndpoints({
  endpoints: (builder) => ({
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
            url: URLS.VACANCIES,
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
  }),
});

export const { useSearchVacanciesByIdsQuery } = searchVacanciesByIdsSlice;
