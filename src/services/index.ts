import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReauth from './baseQueries/baseQueryWithReauth';

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
