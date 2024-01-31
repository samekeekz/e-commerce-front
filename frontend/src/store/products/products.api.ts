import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategory } from '../../types';

export const productsApi = createApi({
  reducerPath: 'tommy/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: build => ({
    getCategories: build.query<ICategory[], string>({
      query: (gender: string) => ({
        url: 'categories' + gender,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = productsApi;
