import type { ReactElement } from 'react';
import Layout from '../components/Layout';
import type { NextPageWithLayout } from './_app';
import Contact from '../components/Contact';

const ContactPage: NextPageWithLayout = () => {
  return (
    <>
      <Contact />
    </>
  );
};

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ContactPage;
