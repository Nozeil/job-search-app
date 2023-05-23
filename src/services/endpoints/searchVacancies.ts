import { SearchResponse, SearchParams } from '@/models';
import { api } from '..';
import { URLS } from '@/constants';

export const searchVacanciesSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    searchVacancies: builder.query<SearchResponse, SearchParams>({
      query: ({ keyword, from, to, catalogues, count, page }) => {
        return {
          url: URLS.VACANCIES,
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
  }),
});

export const { useSearchVacanciesQuery } = searchVacanciesSlice;
