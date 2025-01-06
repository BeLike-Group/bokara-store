import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser, FaPhone, FaIdCard } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UserLogin = () => {
  const [tab, setTab] = useState("signup");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex items-center justify-center pt-8 pb-8 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-2xl">
          <div className="py-6 text-center text-white bg-gradient-to-r from-blue-500 to-purple-600">
            <h1 className="text-3xl font-bold">Welcome User</h1>
            <p className="mt-2">Join our amazing community</p>
          </div>
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setTab("signup")}
                className={`px-4 py-2 rounded-l-md focus:outline-none transition-colors duration-300 ${
                  tab === "signup"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Sign Up
              </button>
              <button
                onClick={() => setTab("login")}
                className={`px-4 py-2 rounded-r-md focus:outline-none transition-colors duration-300 ${
                  tab === "login"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Login
              </button>
            </div>

            {/* Sign Up Form */}
            {tab === "signup" && (
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Full Name"
                    />
                    <FaUser className="absolute text-gray-400 left-3 top-3" />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Email"
                    />
                    <FaEnvelope className="absolute text-gray-400 left-3 top-3" />
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Password"
                    />
                    <FaLock className="absolute text-gray-400 left-3 top-3" />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Phone Number"
                    />
                    <FaPhone className="absolute text-gray-400 left-3 top-3" />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-8 py-2 border rounded-md ML-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="CNIC"
                    />
                    <FaIdCard className="absolute text-gray-400 left-3 top-3" />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Street"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="City"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="State"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Country"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Zip Code"
                    />
                  </div>
                  <div className="relative col-span-2">
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={handleImageUpload}
                    />
                    {image && (
                      <div className="mt-4 text-center">
                        <img
                          src={image}
                          alt="Profile Preview"
                          className="w-24 h-24 mx-auto rounded-full"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <button className="w-full py-2 text-white transition-opacity duration-300 transform rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 hover:scale-105">
                  Sign Up
                </button>
              </form>
            )}

            {/* Login Form */}
            {tab === "login" && (
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Username"
                  />
                  <FaUser className="absolute text-gray-400 left-3 top-3" />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Password"
                  />
                  <FaLock className="absolute text-gray-400 left-3 top-3" />
                </div>
                <NavLink to={"/"}>
                  <button className="w-full py-2 mt-5 text-white transition-opacity duration-300 transform rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 hover:scale-105">
                    Login
                  </button>
                </NavLink>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
