import classNames from 'classnames';
import Link from 'next/link';

type Props = {
  href: string;
  currentRoute: string;
  children: string;
}

const NavLink: React.FC<Props> = ({ href, currentRoute, children }) => (
  <Link
    href={href}
    className={classNames('navbar-item', 'is-size-5', {
      'has-background-white': currentRoute === href,
    })}
  >
    {children}
  </Link>
);

export default NavLink;
