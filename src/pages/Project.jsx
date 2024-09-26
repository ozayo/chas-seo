import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaBriefcase, FaWindowMaximize, FaDatabase, FaRobot, FaFileAlt, FaUsers } from "react-icons/fa";
import Cta from '../components/Cta';

const Project = () => {
  return (
    <>
      <Helmet>
        <title>Project - My Website</title>
        <meta name="description" content="Explore our latest projects and works." />
        <meta property="og:title" content="Projects - My Website" />
        <meta property="og:description" content="Discover the latest projects and innovations from our team." />
      </Helmet>
    
       <section className="mt-5 md:mt-16 mb-20 pb-16">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
          The Project
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

export default Project;

