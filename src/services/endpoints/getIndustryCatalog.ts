import { IndustryCatalogResponse } from '@/models';
import { api } from '..';
import { URLS } from '@/constants';

export const getIndustryCatalogSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getIndustryCatalog: builder.query<IndustryCatalogResponse, void>({
      query: () => ({
        url: URLS.CATALOGUES,
      }),
    }),
  }),
});

export const { useGetIndustryCatalogQuery } = getIndustryCatalogSlice;
