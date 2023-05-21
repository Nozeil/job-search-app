import { NumberInputValue } from '@/types';

export interface AuthWithPasswordResponse {
  access_token: string;
  refresh_token: string;
  ttl: number;
  expires_in: number;
  token_type: string;
}

export interface VacancyResponse {
  id: number;
  profession: string;
  town: {
    title: string;
  };
  type_of_work: {
    title: string;
  };
  payment_to: number;
  payment_from: number;
  currency: string;
  vacancyRichText: string;
}

export type VacancysResponse = VacancyResponse[];
export interface SearchResponse {
  objects: VacancysResponse;
  total: number;
}

export interface EmptySearchByIdsResponse {
  objects: never[];
  total: number;
}
export type SearchByIdsResponse = SearchResponse | EmptySearchByIdsResponse;

interface CatalogItem {
  title: string;
  key: number;
}

export type IndustryCatalogResponse = CatalogItem[];

export type SearchParams = {
  keyword: string;
  from: NumberInputValue;
  to: NumberInputValue;
  catalogues: number | null;
  count: number;
  page: number;
};

export type SearchByIdsParams = {
  ids: {
    ids: { [k: string]: number };
    size: number;
  };
  page: number;
  count: number;
};
