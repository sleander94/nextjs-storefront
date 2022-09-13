import Head from 'next/head';
import { ReactNode } from 'react';
import Navbar from './Navbar';

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
      <main>{children}</main>
    </>
  );
};

export default Layout;
