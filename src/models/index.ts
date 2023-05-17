export interface AuthWithPasswordResponse {
  access_token: string;
  refresh_token: string;
  ttl: number;
  expires_in: number;
  token_type: string;
}

interface Vacancy {
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
}
export interface SearchResponse {
  objects: Vacancy[];
  total: number;
}

interface CatalogItem {
  title: string;
  key: number;
}

export type IndustryCatalogResponse = CatalogItem[];
