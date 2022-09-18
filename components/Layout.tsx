import Head from 'next/head';
import { ReactNode } from 'react';
import Navbar from './Navbar';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
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
  );
};

export default Layout;
