import Link from 'next/link';

const NavBar:React.FC = () => {
  return (
    <>
    <Link href='/'>Blog</Link>
    <Link href='/news'>News</Link>
    </>
  )

}

export default NavBar;