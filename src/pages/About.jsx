import { Helmet } from 'react-helmet-async';
import { FaBriefcase, FaWindowMaximize, FaDatabase, FaRobot, FaFileAlt, FaUsers } from "react-icons/fa";
import Cta from '../components/Cta';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Chas SEO</title>
        <meta name="description" content="Learn more about Chas SEO and what we do." />
        <meta property="og:title" content="About - Chas SEO" />
        <meta property="og:description" content="Learn more about Chas SEO and what we do." />
        <meta property="og:image" content="https://chas-seo.vercel.app/about-og-image.png" />
        <meta property="og:url" content="https://chas-seo.vercel.app/about" />
        <link rel="canonical" href="https://chas-seo.vercel.app/about" />
      </Helmet>

      <section className="mt-5 md:mt-16 mb-20 pb-16">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
          About us
        </h1>
        <p className="text-lg mt-4 text-slate-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium praesentium accusamus ullam. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ad totam, vitae officiis, recusandae deserunt a dolore asperiores, neque nisi omnis nobis autem quas minus laborum numquam quidem dolor debitis.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-12 gap-8 pt-5">
          <div className="flex gap-4 items-start bg-gray-100 p-3 rounded-sm">
            {/* Icon */}
            <div className="mt-1 bg-black rounded-full p-2 w-8 h-8 flex items-center justify-center shrink-0">
              <FaBriefcase size={24} className="text-white" />
            </div>
            {/* Title & Description */}
            <div>
              <h3 className="font-semibold text-lg">
                Vite & React
              </h3>
              <p className="text-slate-500 mt-2 leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start bg-gray-100 p-3 rounded-sm">
            {/* Icon */}
            <div className="mt-1 bg-black rounded-full p-2 w-8 h-8 flex items-center justify-center shrink-0">
              <FaWindowMaximize size={24} className="text-white" />
            </div>
            {/* Title & Description */}
            <div>
              <h3 className="font-semibold text-lg">
                SEO Friendly
              </h3>
              <p className="text-slate-500 mt-2 leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start bg-gray-100 p-3 rounded-sm">
            {/* Icon */}
            <div className="mt-1 bg-black rounded-full p-2 w-8 h-8 flex items-center justify-center shrink-0">
              <FaDatabase size={24} className="text-white" />
            </div>
            {/* Title & Description */}
            <div>
              <h3 className="font-semibold text-lg">
                Dynamic Sitemap
              </h3>
              <p className="text-slate-500 mt-2 leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
      </div>
      </section>
      <Cta />
    </>
  );
};

export default About;
