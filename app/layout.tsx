import './globals.scss';
import { Montserrat } from 'next/font/google';
import Footer from './components/Footer';
import { ClientProvider } from '@/redux/services/ClientProvider';
import { Suspense } from 'react';
import Loading from './loading';
import NavBar from './components/NavBar';

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
        <Suspense fallback={<Loading />}>
          <NavBar />
          <main className="section">
            <div className="container pb-6">
              <ClientProvider>{children}</ClientProvider>
            </div>
          </main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}

