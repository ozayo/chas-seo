import React from 'react';
import { Helmet } from 'react-helmet-async';

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>Projects - My Website</title>
        <meta name="description" content="Explore our latest projects and works." />
        <meta property="og:title" content="Projects - My Website" />
        <meta property="og:description" content="Discover the latest projects and innovations from our team." />
      </Helmet>
      <h1>Our Projects</h1>
      <p>Here you can find a list of our latest and most exciting projects.</p>
    </div>
  );
};

export default Projects;

