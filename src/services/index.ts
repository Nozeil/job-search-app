import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://startup-summer-2023-proxy.onrender.com',
  }),
  endpoints: (builder) => ({}),
});

export const {} = api;
