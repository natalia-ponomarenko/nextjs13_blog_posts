import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Post } from '@/types/Post';

export type SelectedPostState = {
  selectedPost: Post | null;
};

const initialState: SelectedPostState = {
  selectedPost: null,
};

const selectedPostSlice = createSlice({
  name: 'selectedPost',
  initialState,
  reducers: {
    setSelectedPost: (state, action: PayloadAction<Post>) => {
      state.selectedPost = action.payload;
    },
    removeSelectedPost: (state) => {
      state.selectedPost = null;
    },
  },
});

export default selectedPostSlice.reducer;
export const { setSelectedPost, removeSelectedPost } =
  selectedPostSlice.actions;
