import { News } from "@/types/News";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type NewsState = {
  news: News | null;
};

const initialState: NewsState = {
  news: null
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<News>) => {
      state.news = action.payload;
    }
  }
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
