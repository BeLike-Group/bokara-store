import React from 'react';

const About = () => {
  return (
    <div className="max-w-screen-xl p-5 mx-auto">
      <div className="items-center justify-center sm:flex">
        <div className="p-5 sm:w-1/2">
          <div className="object-center text-center image">
            <img
              src="https://i.imgur.com/WbQnbas.png"
              alt="Our Company"
              className="w-full h-auto "
            />
          </div>
        </div>
        <div className="p-5 sm:w-1/2">
          <div className="text">
            <span className="text-gray-500 uppercase border-b-2 border-indigo-600">
              About us
            </span>
            <h2 className="my-4 text-3xl font-bold sm:text-4xl">
              About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
              doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
              voluptatum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
