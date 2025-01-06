import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa'; // import the necessary icons

const Contact = () => {
  return (
    <div>
      <div className="max-w-screen-lg p-5 mx-auto">
        <div className="grid grid-cols-1 border md:grid-cols-12">
          <div className="p-10 text-white bg-gray-900 md:col-span-4">
            <p className="mt-4 text-sm leading-7 uppercase font-regular">
              Contact
            </p>
            <h3 className="text-3xl font-extrabold leading-normal tracking-tight sm:text-4xl">
              Get In <span className="text-indigo-600">Touch</span>
            </h3>
            <p className="mt-4 leading-7 text-gray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>

            <div className="flex items-center mt-5">
              <FaMapMarkerAlt className="h-6 mr-2 text-indigo-600" />
              <span className="text-sm">House #14, Street #12, Darulaman Road, Kabul, Afghanistan.</span>
            </div>
            <div className="flex items-center mt-5">
              <FaPhoneAlt className="h-6 mr-2 text-indigo-600" />
              <span className="text-sm">+93 749 99 65 50</span>
            </div>
            <div className="flex items-center mt-5">
              <FaRegClock className="h-6 mr-2 text-indigo-600" />
              <span className="text-sm">24/7</span>
            </div>
          </div>

          <form className="p-10 md:col-span-8">
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-first-name">
                  First Name
                </label>
                <input
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p className="text-xs italic text-red-500">Please fill out this field.</p>
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-last-name">
                  Last Name
                </label>
                <input
                  className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-email">
                  Email Address
                </label>
                <input
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="********@*****.**"
                />
              </div>
            </div>

            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-message">
                  Your Message
                </label>
                <textarea
                  rows="10"
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-message"
                ></textarea>
              </div>
              <div className="flex justify-between w-full px-3">
                <div className="md:flex md:items-center">
                  <label className="block font-bold text-gray-500">
                    <input className="mr-2 leading-tight" type="checkbox" />
                    <span className="text-sm">Send me your newsletter!</span>
                  </label>
                </div>
                <button
                  className="px-6 py-2 font-bold text-white bg-indigo-600 rounded shadow hover:bg-indigo-400 focus:shadow-outline focus:outline-none"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
