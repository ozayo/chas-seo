import React from 'react';
import ReactGA from 'react-ga4';

const Cta = () => {

  // Event tracking function for the button click
  const handleCtaClick = () => {
    ReactGA.event({
      category: 'CTA Button',    // Olayın kategorisi
      action: 'Click_cta',           // Olayın aksiyonu (tıklama)
      label: 'Contact Us Button On CTA' // Olayın etiketi (butonun adı)
    });
  };


  return (
    <section className="bg-black my-11">
      <div className="py-10 px-4 mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-screen-sm text-center">
          <div className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-white">
            Let’s Build Something Together
          </div>
          <p className="mb-6 font-light text-gray-300 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <a className="bg-white px-8 py-3 font-medium hover:bg-gray-200" href="/contact" onClick={handleCtaClick} >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;