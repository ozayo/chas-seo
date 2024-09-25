import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact - My Website</title>
        <meta name="description" content="Get in touch with us via this page." />
        <meta property="og:title" content="Contact - My Website" />
        <meta property="og:description" content="Reach out to us for inquiries or collaborations." />
      </Helmet>
      <h1>Contact Us</h1>
      <p>This is the contact page where you can get in touch with us.</p>
    </div>
  );
};

export default Contact;
