import Link from 'next/link';

const NavBar:React.FC = () => {
  return (
    <>
    <Link href='/'>Home</Link>
    <Link href='/blog'>Blog</Link>
    <Link href='/news'>News</Link>
    </>
  )

}

export default NavBar;