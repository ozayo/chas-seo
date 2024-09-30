import { Helmet } from 'react-helmet-async';
import MainHero from '../components/MainHero';
import Features from '../components/Features';
import Cta from '../components/Cta';
import LatestBlogPosts from '../components/LatestBlogPosts';

const Home = () => {
  return (
    <>
       <Helmet>
        <title>Home - Chas SEO</title>
        <meta name="description" content="Chas Seo website home page." />
        <meta property="og:title" content="Home - Chas SEO" />
        <meta property="og:description" content="Chas Seo website home page." />
        <meta property="og:image" content="https://chas-seo.vercel.app/chas-seo-og.png" />
        <meta property="og:url" content="https://chas-seo.vercel.app/" />
        <link rel="canonical" href="https://chas-seo.vercel.app/" />
      </Helmet>
      <MainHero/>
      <Features />
      <Cta />
      <LatestBlogPosts />
    </>
  );
}

export default Home;
