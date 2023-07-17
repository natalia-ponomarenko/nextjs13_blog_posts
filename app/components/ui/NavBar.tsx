'use client';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';
import { useState } from 'react';
import classNames from 'classnames';

const NavBar: React.FC = () => {
  const currentRoute = usePathname();
  const [isBurgerActive, setBurgerActive] = useState<boolean>(false);
  const [isMenuActive, setMenuActive] = useState<boolean>(false);

  const handleBurgerClick = () => {
    setBurgerActive(!isBurgerActive);
    setMenuActive(!isMenuActive);
  };

  return (
    <nav
      className="navbar pl-6 has-background-link-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          role="button"
          className={classNames('navbar-burger', {
            'is-active': isBurgerActive,
          })}
          onClick={handleBurgerClick}
          data-target="navMenu"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navMenu"
        className={classNames('navbar-menu', { 'is-active': isMenuActive })}
      >
        <div className="navbar-start">
          <NavLink
            href="/"
            currentRoute={currentRoute}
          >
            Home
          </NavLink>
          <NavLink
            href="/blog"
            currentRoute={currentRoute}
          >
            Blog
          </NavLink>
          <NavLink
            href="/news"
            currentRoute={currentRoute}
          >
            News
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

