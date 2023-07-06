'use client';

import classNames from 'classnames';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  removeSelectedPost,
  setSelectedPost,
} from '@/redux/features/selectedPost/selectedPost';

export const PostsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedPost } = useAppSelector((state) => state.selectedPost);
  const { items: posts } = useAppSelector((state) => state.posts);

  return (
    <div>
      <p className="title">Posts:</p>

      <table className="table is-fullwidth is-striped is-hoverable is-narrow">
        <thead>
          <tr className="has-background-link-light">
            <th>#</th>
            <th>Title</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td className="has-text-right is-vcentered">
                <button
                  type="button"
                  className={classNames('button', 'is-link', {
                    'is-light': post.id !== selectedPost?.id,
                  })}
                  onClick={() => {
                    dispatch(
                      post.id === selectedPost?.id
                        ? removeSelectedPost()
                        : setSelectedPost(post)
                    );
                  }}
                >
                  {post.id === selectedPost?.id ? 'Close' : 'Open'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
