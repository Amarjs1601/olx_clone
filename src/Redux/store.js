import {configureStore} from '@reduxjs/toolkit';
import postReducer from './PostSlice';
import WishlistReducer from './WishlistSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
    wishlist: WishlistReducer,
  },
});
