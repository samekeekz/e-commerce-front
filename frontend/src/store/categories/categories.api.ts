import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category } from '../../types';

export const categoriesApi = createApi({
  reducerPath: 'categories/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  tagTypes: ['Categories'],
  endpoints: build => ({
    getCategories: build.query<Category[], string>({
      query: gender => ({
        url: 'categories' + gender,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
