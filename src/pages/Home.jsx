import { Helmet } from 'react-helmet-async';
import MainHero from '../components/MainHero';
import Features from '../components/Features';
import Cta from '../components/Cta';

const Home = () => {
  return (
    <>
       <Helmet>
        <title>Home - Chas SEO</title>
        <meta name="description" content="Chas Seo website home page." />
        <meta property="og:title" content="Home - Chas SEO" />
        <meta property="og:description" content="Chas Seo website home page." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://chas-seo.vercel.app/chas-seo-og.png" />
        <meta property="og:url" content="https://chas-seo.vercel.app/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Language" content="en" />
        <link rel="canonical" href="https://chas-seo.vercel.app/" />
      </Helmet>
      <MainHero/>
      <Features />
       <Cta />
    </>
  );
}

export default Home;
