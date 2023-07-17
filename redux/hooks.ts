import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { PostsState } from './features/posts/posts';
import { AuthorState } from './features/author/author';
import { CommentsState } from './features/comments/comments';
import { UsersState } from './features/users/users';

interface CombinedState extends RootState {
  users: UsersState;
  posts: PostsState;
  author: AuthorState;
  comments: CommentsState;
}

// hooks instead of useDispatch and useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCustomSelector = <T>(selector: (state: CombinedState) => T) => {
  return useAppSelector((state: RootState) => selector(state));
};