
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

// import { News } from "@/types/News";
// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

// type NewsState = {
//   news: News[];
//   loading: boolean;
//   error: string;
// };

// const initialState: NewsState = {
//   news: [],
//   loading: false,
//   error: '',
// };

// export const newsSlice = createSlice({
//   name: 'news',
//   initialState,
//   reducers: {
//     setNews: (state, action: PayloadAction<News[]>) => {
//       state.news = action.payload;
//       state.loading = false;
//       state.error = '';
//     },
//     setLoading: (state, action: PayloadAction<boolean>) => {
//       state.loading = action.payload;
//     },
//     setError: (state, action: PayloadAction<string>) => {
//       state.error = action.payload;
//       state.loading = false;
//     },
//   }
// });

// export const { setNews, setLoading, setError } = newsSlice.actions;
// export default newsSlice.reducer;