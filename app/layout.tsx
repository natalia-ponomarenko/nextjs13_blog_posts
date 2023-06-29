import './globals.scss';
import { Montserrat } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import { ProviderWrapper } from '@/redux/services/provider';

const montserrat = Montserrat({
  weight: ['700', '400'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Blog Posts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
        style={{ height: '100vh' }}
      >
        <Header />
        <ProviderWrapper>{children}</ProviderWrapper>
        <Footer />
      </body>
    </html>
  );
}
