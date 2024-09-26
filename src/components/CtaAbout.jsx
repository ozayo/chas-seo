import { FaAt, FaPhoneAlt, FaMapMarkerAlt, } from "react-icons/fa";

const CtaAbout = () => {
  return (
    <section className="bg-black my-11">
      <div className="py-10 px-4 mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-screen-sm text-center">
          <div className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-white">
            Let’s Call You
          </div>
          <p className="mb-6 font-light text-gray-300 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <a className="flex gap-1 items-center justify-center bg-white px-8 py-3 font-medium hover:bg-gray-200" href="/contact">
           <FaPhoneAlt size={16} className="text-black" /> Call me 
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaAbout;