import type { ReactElement } from 'react';
import Layout from '../components/Layout';
import type { NextPageWithLayout } from './_app';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '../components/Hero';

const Page: NextPageWithLayout = () => {
  return (
    <section id="home">
      <Hero />
    </section>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
