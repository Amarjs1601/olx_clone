import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const WishlistSlice = createSlice({
  name: 'wishlist',
  initialState,

  reducers: {
    addWishlist(state, action) {
      state.data.push(action.payload);
    },
    removeWishListItem(state, action) {
      let tempData = state.data;

      tempData.splice(action.payload, 1);

      state.data = tempData;
    },
  },
});

export const {addWishlist, removeWishListItem} = WishlistSlice.actions;
export default WishlistSlice.reducer;
