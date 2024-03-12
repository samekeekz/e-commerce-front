import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category, Product } from '../../types';

export const productsApi = createApi({
  reducerPath: 'products/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  tagTypes: ['Products'],
  endpoints: build => ({
    getProducts: build.query<Product[], void>({
      query: () => ({
        url: 'products',
      }),
      providesTags: ['Products'],
    }),
    getProductsByCategory: build.query<Product[], string>({
      query: category => ({
        url: 'category' + category,
      }),
      providesTags: ['Products'],
    }),
    getProductsWithFilters: build.query<Product[], object>({
      query: filters => {
        return {
          url: 'products',
          params: filters,
        };
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductsWithFiltersQuery,
} = productsApi;
