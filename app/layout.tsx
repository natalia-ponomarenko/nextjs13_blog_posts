import './globals.scss';
import { Montserrat } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import { ClientProvider } from '@/redux/services/ClientProvider';

const montserrat = Montserrat({
  weight: ['700', '400'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Next.js 13 Blog/News',
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
        <ClientProvider>{children}</ClientProvider>
        <Footer />
      </body>
    </html>
  );
}
