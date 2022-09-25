import type { ReactElement } from 'react';
import Layout from '../components/Layout';
import type { NextPageWithLayout } from './_app';
import Brands from '../components/Brands';

const BrandsPage: NextPageWithLayout = () => {
  return (
    <>
      <Brands />
    </>
  );
};

BrandsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BrandsPage;
