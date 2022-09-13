import type { ReactElement } from 'react';
import Layout from '../components/Layout';
import type { NextPageWithLayout } from './_app';

const TestPage: NextPageWithLayout = () => {
  return <p>Test Page</p>;
};

TestPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default TestPage;
