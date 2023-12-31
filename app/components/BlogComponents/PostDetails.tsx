'use client';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useCustomSelector } from '@/redux/hooks';
import * as commentsActions from '@/redux/features/comments/comments';
import * as commentsApi from '@/api/comments';
import { CommentData } from '@/types/Comment';
import NewCommentForm from './NewCommentForm';
import Loader from '../ui/Loader/Loader';

const PostDetails: React.FC = () => {
  const { selectedPost } = useCustomSelector((state) => state.selectedPost);
  const {
    items: comments,
    loaded,
    hasError,
  } = useCustomSelector((state) => state.comments);
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (selectedPost) {
      dispatch(commentsActions.init(selectedPost.id));
    }
  }, [selectedPost?.id, dispatch, selectedPost]);

  const addComment = async ({ name, email, body }: CommentData) => {
    if (selectedPost) {
      await dispatch(
        commentsActions.addCommentItem({
          name,
          email,
          body,
          postId: selectedPost.id,
        })
      );
    }
  };

  const deleteComment = async (commentId: number) => {
    dispatch(commentsActions.setComments(commentId));
    await commentsApi.deleteComment(commentId);
  };

  return (
    <div className="content">
      <div className="block">
        <h2>{`#${selectedPost?.id}: ${selectedPost?.title}`}</h2>
        <p>{selectedPost?.body}</p>
      </div>
      <div className="block">
        {!loaded && <Loader />}

        {loaded && hasError && (
          <div className="notification is-danger">Something went wrong</div>
        )}

        {loaded && !hasError && comments.length === 0 && (
          <p className="title is-4">No comments yet</p>
        )}

        {loaded && !hasError && comments.length > 0 && (
          <>
            <p className="title is-4">Comments:</p>
            {comments.map((comment) => (
              <article
                className="message is-small"
                key={comment.id}
              >
                <div className="message-header">
                  <a href={`mailto:${comment.email}`}>{comment.name}</a>
                  <button
                    type="button"
                    className="delete is-small"
                    aria-label="delete"
                    onClick={() => deleteComment(comment.id)}
                  />
                </div>
                <div className="message-body">{comment.body}</div>
              </article>
            ))}
          </>
        )}

        {loaded && !hasError && !visible && (
          <button
            type="button"
            className="button is-link"
            onClick={() => setVisible(true)}
          >
            Write a comment
          </button>
        )}

        {loaded && !hasError && visible && (
          <NewCommentForm onSubmit={addComment} />
        )}
      </div>
    </div>
  );
};

export default PostDetails;
