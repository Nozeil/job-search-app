import { VacancyResponse } from '@/models';
import { api } from '..';
import { URLS } from '@/constants';

export const searchVacancyByIdSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    searchVacancyById: builder.query<VacancyResponse, string>({
      query: (id) => {
        return {
          url: `${URLS.VACANCIES}/${id}/`,
          params: {
            published: 1,
          },
        };
      },
    }),
  }),
});

export const { useSearchVacancyByIdQuery } = searchVacancyByIdSlice;
