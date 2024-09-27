import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaAt, FaPhoneAlt, FaMapMarkerAlt, } from "react-icons/fa";
import ContactForm from '../components/ContactForm';
import CtaAbout from '../components/CtaAbout';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Chas SEO</title>
        <meta name="description" content="Get in touch with Chas SEO to discuss how we can help your business grow." />
        <meta property="og:title" content="Contact - Chas SEO" />
        <meta property="og:description" content="Get in touch with Chas SEO to discuss how we can help your business grow." />
        <meta property="og:image" content="https://chas-seo.vercel.app/contact-og-image.png" />
        <meta property="og:url" content="https://chas-seo.vercel.app/contact" />
        <link rel="canonical" href="https://chas-seo.vercel.app/contact" />
      </Helmet>
      
       <section className="mt-5 md:mt-16 mb-20 pb-16">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
            Contact us
          </h1>
          <p className="text-lg mt-4 text-slate-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium praesentium accusamus ullam. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex gap-4 items-start bg-gray-100 p-3 rounded-sm">
                {/* Icon */}
                <div className="mt-1 bg-black rounded-full p-2 w-8 h-8 flex items-center justify-center shrink-0">
                  <FaAt size={26} className="text-white" />
                </div>
                {/* Title & Description */}
                <div>
                  <h3 className="font-semibold text-lg">Send E-mail</h3>
                  <p className="text-slate-500 mt-2 leading-relaxed">
                    info@chasseo.se
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-gray-100 p-3 rounded-sm">
                {/* Icon */}
                <div className="mt-1 bg-black rounded-full p-2 w-8 h-8 flex items-center justify-center shrink-0">
                  <FaPhoneAlt size={24} className="text-white" />
                </div>
                {/* Title & Description */}
                <div>
                  <h3 className="font-semibold text-lg">Call us</h3>
                  <p className="text-slate-500 mt-2 leading-relaxed">
                    +46 0765432101
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-gray-100 p-3 rounded-sm">
                {/* Icon */}
                <div className="mt-1 bg-black rounded-full p-2 w-8 h-8 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt size={18} className="text-white" />
                </div>
                {/* Title & Description */}
                <div>
                  <h3 className="font-semibold text-lg">Visit us</h3>
                  <p className="text-slate-500 mt-2 leading-relaxed">
                    Arenavägen 61 <br />121 77 Johanneshov
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
      <CtaAbout />
    </>
  );
};

export default Contact;
