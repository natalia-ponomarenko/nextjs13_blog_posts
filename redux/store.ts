import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import usersReducer from './features/users/users';
import authorReducer from './features/author/author';
import postsReducer from './features/posts/posts';
import selectedPostReducer from './features/selectedPost/selectedPost';
import commentsReducer from './features/comments/comments';
import newsReducer from './features/news/news';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    author: authorReducer,
    posts: postsReducer,
    selectedPost: selectedPostReducer,
    comments: commentsReducer,
    news: newsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;



export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
