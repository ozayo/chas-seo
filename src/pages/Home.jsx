import { Helmet } from 'react-helmet-async';
import MainHero from '../components/MainHero';
import Features from '../components/Features';
import Cta from '../components/Cta';
import homeOgimg from "../assets/chas-seo-og.png"

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Home - Chas SEO</title>
        <meta name="description" content="Chas Seo website home page." />
        <meta property="og:title" content="Home - Chas SEO" />
        <meta property="og:description" content="Chas Seo website home page." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={homeOgimg} />
      </Helmet>
      <MainHero/>
      <Features />
       <Cta />
    </div>
  );
}

export default Home;
