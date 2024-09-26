import React from 'react';

const ContactForm = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100">
      
      <form>
        {/* Full Name */}
        <div className="mb-4">
          {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
            Full Name
          </label> */}
          <input
            type="text"
            id="fullName"
            className=" appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Full Name"
          />
        </div>

        {/* Email Address */}
        <div className="mb-4">
          {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailAddress">
            Email Address
          </label> */}
          <input
            type="email"
            id="emailAddress"
            className=" appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email Address"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Your Message
          </label> */}
          <textarea
            id="message"
            rows="5"
            className=" appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
