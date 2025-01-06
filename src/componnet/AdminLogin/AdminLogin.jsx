import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div className="flex pt-6 pb-4 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto overflow-hidden bg-white rounded-lg shadow-2xl">
          <div className="py-6 text-center text-white bg-gradient-to-r from-purple-600 to-blue-500">
            <h1 className="text-3xl font-bold">Welcome Admin</h1>
            <p className="mt-2">Join our amazing community</p>
          </div>
          <div className="p-8">
            {/* Login Form */}
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email or Username"
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
              <NavLink to={"/Adashboard"}>
                <button className="w-full py-2 mt-5 text-white transition-opacity duration-300 transform rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 hover:scale-105">
                  Login
                </button>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
