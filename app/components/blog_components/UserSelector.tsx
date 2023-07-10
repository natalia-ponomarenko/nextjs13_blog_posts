'use client';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setAuthor } from '@/redux/features/author/author';
import { Loader } from '../Loader/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


export const UserSelector: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const { users, loading, error } = useAppSelector((state) => state.users);
  const selectedUser = useAppSelector((state) => state.author.author);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!expanded) {
      return;
    }

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [expanded]);

  const handleDocumentClick = () => {
    setExpanded(false);
  };

  return (
    <div className={classNames('dropdown', { 'is-active': expanded })}>
      <div className="dropdown-trigger">
        <button
          type="button"
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => {
            setExpanded((current) => !current);
          }}
        >
          <span>{selectedUser?.name || 'Choose a user'}</span>

          <span className="icon is-small">
            <FontAwesomeIcon icon={faAngleDown}
              aria-hidden="true"
            />
          </span>
        </button>
      </div>

      <div
        className="dropdown-menu"
        id="dropdown-menu"
        role="menu"
      >
        <div className="dropdown-content">
          {loading && <Loader />}
          {!error ? (
            users.map((user) => (
              <a
                key={user.id}
                href={`#user-${user.id}`}
                onClick={() => {
                  dispatch(setAuthor(user));
                }}
                className={classNames('dropdown-item', {
                  'is-active': user.id === selectedUser?.id,
                })}
              >
                {user.name}
              </a>
            ))
          ) : (
            <p>{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};
