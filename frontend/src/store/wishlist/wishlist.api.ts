import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../types';

export const wishlistApi = createApi({
  reducerPath: 'wishlist/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  tagTypes: ['Wishlist'],
  endpoints: build => ({
    getWishlist: build.query<Product[], void>({
      query: () => ({
        url: 'wishlist',
      }),
      providesTags: ['Wishlist'],
    }),
    addWishlist: build.mutation<void, number>({
      query: (id: number) => ({
        url: 'wishlist',
        method: 'POST',
        body: { id },
      }),
      invalidatesTags: ['Wishlist'],
    }),
    removeWishlist: build.mutation<void, number>({
      query: (id: number) => ({
        url: 'wishlist',
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: ['Wishlist'],
    }),
  }),
});

export const { useGetWishlistQuery, useAddWishlistMutation, useRemoveWishlistMutation } =
  wishlistApi;
