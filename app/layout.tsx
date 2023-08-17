import Footer from './components/ui/Footer';
import { ClientProvider } from '@/redux/services/ClientProvider';
import { Suspense } from 'react';
import Loading from './loading';
import NavBar from './components/ui/NavBar';
import { montserrat } from './font';
import 'bulma/bulma.sass';
import classNames from 'classnames';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
export const revalidate = 0;

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
        className={classNames(montserrat.className, 'hero', 'is-fullheight')}
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

