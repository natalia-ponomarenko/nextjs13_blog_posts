
import { News } from "@/types/News";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type NewsState = {
  setNews: News | null;
};

const initialState: NewsState = {
  setNews: null
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<News>) => {
      state.setNews= action.payload;
    }
  }
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
