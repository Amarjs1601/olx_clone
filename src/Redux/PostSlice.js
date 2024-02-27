import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,

  reducers: {
    addPost(state, action) {
      state.data.push(action.payload);
      console.log(state.data);
    },
  },
});

export const {addPost} = postSlice.actions;
export default postSlice.reducer;
