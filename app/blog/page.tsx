'use client';
import React, { useEffect } from 'react';
import 'bulma/bulma.sass';
import '@fortawesome/fontawesome-free/css/all.css';

import classNames from 'classnames';
import { PostsList } from '../components/blog_components/PostsList';
import { PostDetails } from '../components/blog_components/PostDetails';
import { UserSelector } from '../components/blog_components/UserSelector';
import { Loader } from '../components/Loader/Loader';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import * as usersActions from '@/redux/features/users/users';
import * as postsActions from '@/redux/features/posts/posts';
import { removeSelectedPost } from '@/redux/features/selectedPost/selectedPost';
import Warning from '../components/Warning';
import DangerWarning from '../components/DangerWarning';

const Blog: React.FC = () => {
  const dispatch = useAppDispatch();
  const { author } = useAppSelector((state) => state.author);
  const { selectedPost } = useAppSelector((state) => state.selectedPost);
  const {
    items: posts,
    loaded,
    hasError,
  } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(usersActions.init());
  }, [dispatch]);

  useEffect(() => {
    dispatch(removeSelectedPost());

    author
      ? dispatch(postsActions.init(author.id))
      : dispatch(postsActions.setPosts([]));
  }, [author?.id, author, dispatch]);

  return (
    <>
      <h1 className="title has-text-centered is-size-3">Blog Page</h1>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child box is-success">
            <div className="block">
              <UserSelector />
            </div>

            <div className="block">
              {!author && <p>No user selected</p>}

              {author && !loaded && <Loader />}

              {author && loaded && hasError && <DangerWarning />}

              {author && loaded && !hasError && !posts.length && (
                <Warning text="No posts yet" />
              )}
              
              {author && loaded && !hasError && posts.length > 0 && (
                <PostsList />
              )}
            </div>
          </div>
        </div>

        <div
          className={classNames(
            'tile',
            'is-parent',
            'is-8-desktop',
            'Sidebar',
            {
              'Sidebar--open': selectedPost,
            }
          )}
        >
          <div className="tile is-child box is-success ">
            {selectedPost && <PostDetails />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

