import Head from 'next/head';
import { ReactNode, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from './Footer';
import AgeVerifier from './AgeVerifier';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isOver21, setIsOver21] = useState<boolean>(true);

  useEffect(() => {
    const ver = sessionStorage.getItem('eclipseOver21');
    if (ver !== 'true') setIsOver21(false);
  }, []);
  return (
    <>
      {!isOver21 && <AgeVerifier setIsOver21={setIsOver21} />}
      {isOver21 && (
        <>
          <Head>
            <title>Layouts Example</title>
          </Head>
          <Navbar />
          <ParallaxProvider>
            <main>{children}</main>
          </ParallaxProvider>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
