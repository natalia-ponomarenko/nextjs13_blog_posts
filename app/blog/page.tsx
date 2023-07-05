'use client';
import React, { useEffect } from 'react';
import 'bulma/bulma.sass';
import '@fortawesome/fontawesome-free/css/all.css';

import classNames from 'classnames';
import { PostsList } from '../components/PostsList';
import { PostDetails } from '../components/PostDetails';
import { UserSelector } from '../components/UserSelector';
import { Loader } from '../components/Loader/Loader';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import * as usersActions from '@/redux/features/users/users';
import * as postsActions from '@/redux/features/posts/posts';
import { removeSelectedPost } from '@/redux/features/selectedPost/selectedPost';

const Blog: React.FC = () => {
  console.log('render home');
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
    <main className="section">
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-child box is-success">
              <div className="block">
                <UserSelector />
              </div>

              <div className="block">
                {!author && <p>No user selected</p>}

                {author && !loaded && <Loader />}

                {author && loaded && hasError && (
                  <div className="notification is-danger">
                    Something went wrong!
                  </div>
                )}

                {author && loaded && !hasError && !posts.length && (
                  <div className="notification is-warning">No posts yet</div>
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
      </div>
    </main>
  );
};

export default Blog;