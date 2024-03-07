import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category, Product } from '../../types';

export const productsApi = createApi({
  reducerPath: 'tommy/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: build => ({
    getCategories: build.query<Category[], string>({
      query: (gender: string) => ({
        url: 'categories' + gender,
      }),
    }),
    getProductsByCategory: build.query<Product, string>({
      query: (category: string) => ({
        url: 'category' + category,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsByCategoryQuery } = productsApi;
