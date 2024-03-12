import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../types';

export const cartApi = createApi({
  reducerPath: 'cart/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  tagTypes: ['Cart'],
  endpoints: build => ({
    getCart: build.query({
      query: () => ({
        url: 'cart',
      }),
      providesTags: ['Cart'],
    }),
    addToCart: build.mutation<Product, Product>({
      query: body => ({
        url: 'cart',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Cart'],
    }),
    removeFromCart: build.mutation<void, number>({
      query: id => ({
        url: 'cart',
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
});

export const { useGetCartQuery, useAddToCartMutation, useRemoveFromCartMutation } = cartApi;
