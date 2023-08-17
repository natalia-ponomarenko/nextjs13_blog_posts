'use client';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useCustomSelector } from '@/redux/hooks';
import { setAuthor } from '@/redux/features/author/author';
import Loader from '../ui/Loader/Loader';;
import { User } from '@/types/User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


const UserSelector: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const { users, loading, error } = useCustomSelector((state) => state.users);
  const selectedUser = useCustomSelector((state) => state.author.author);
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
            <FontAwesomeIcon
              icon={faAngleDown as IconProp}
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
            users?.map((user: User) => (
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

export default UserSelector;
