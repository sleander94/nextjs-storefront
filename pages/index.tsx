import { ReactElement } from 'react';
import Layout from '../components/Layout';
import type { NextPageWithLayout } from './_app';
import Hero from '../components/Hero';
import BrandHeading from '../components/BrandHeading';
import StoreCarousel from '../components/StoreCarousel';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import LoyaltySignup from '../components/LoyaltySignup';

const Page: NextPageWithLayout = () => {
  return (
    <div id="home">
      <Hero />
      <BrandHeading />
      <Contact />
      <Testimonials />
      <StoreCarousel />
      <LoyaltySignup />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
