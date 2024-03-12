import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './products/products.api';
import { setupListeners } from '@reduxjs/toolkit/query';
import { categoriesApi } from './categories/categories.api';
import { wishlistApi } from './wishlist/wishlist.api';
import { cartApi } from './cart/cart.api';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [wishlistApi.reducerPath]: wishlistApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(categoriesApi.middleware)
      .concat(wishlistApi.middleware)
      .concat(cartApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
