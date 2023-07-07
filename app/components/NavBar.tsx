import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav
      className="navbar pl-6 is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        {/* <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a> */}

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar1"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
    
      </div>

      <div
        id="navbar1"
        className="navbar-menu"
      >
        <div className="navbar-start">
          <Link
            href="/"
            className="navbar-item is-size-5"
          >
            Home
          </Link>

          <Link
            href="/blog"
            className="navbar-item is-size-5"
          >
            Blog
          </Link>
          <Link
            href="/news"
            className="navbar-item is-size-5"
          >
            News
          </Link>
        </div>

        {/* <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default NavBar;

