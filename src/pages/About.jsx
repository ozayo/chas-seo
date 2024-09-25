import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div className="text-center">
      <Helmet>
        <title>About - Özay Özdemir Portfolio</title>
        <meta name="description" content="Learn more about Özay Özdemir, a front-end developer and UI/UX designer." />
      </Helmet>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
      <p className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto">
        I'm a passionate front-end developer and UI/UX designer with a focus on creating clean, responsive, and user-friendly web applications.
      </p>
    </div>
  );
};

export default About;
