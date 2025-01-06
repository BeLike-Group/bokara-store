import React, { useState } from "react";
import { FaBlogger, FaCode, FaShoppingCart, FaUsers, FaPlus, FaEdit, FaChartBar, FaCheckCircle, FaHourglass } from "react-icons/fa";
import { AiOutlineAppstore, AiOutlineOrderedList, AiOutlineProduct } from "react-icons/ai";
import { FcSalesPerformance } from "react-icons/fc";
import { IoIosLogOut } from "react-icons/io";
import { RiAdminLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import CAdmin from "./CAdmin";
import EAdmin from "./EAdmin";
import CCategory from "./CCategory";
import EStore from "./EStore";
import AStore from "./AStore";
import AProduct from "./AProduct";
import EProduct from "./EProduct";
import ECAtegory from "./ECAtegory";
import SSaler from "./SSaler";

const ADashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block lg:w-64`}
      >
        <div className="flex flex-col h-full p-4 bg-white border-r border-gray-200 dark:bg-gray-800">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center justify-center gap-2 py-4 cursor-pointer lg:justify-start"
          >
            <FaCode className="text-3xl text-blue-600" />
            <span className="hidden text-lg font-bold text-gray-800 lg:block dark:text-gray-100">
              My Store
            </span>
          </a>
          {/* Menu */}
          <div className="flex flex-col flex-grow">
            <div className="mt-4 space-y-2">
              <div className="px-5">
                <span className="text-xs font-bold text-gray-600 uppercase dark:text-gray-300">
                  Menu
                </span>
              </div>
              {/* Links */}
              {/* <NavLink
                to="#"
                onClick={() => handleMenuClick("dashboard")}
                className="flex items-center h-12 px-4 font-semibold text-gray-500 transition duration-200 rounded-md hover:text-blue-600 hover:bg-blue-50"
              >
                <AiOutlineAppstore className="text-xl text-gray-600 hover:text-blue-600" />
                <span className="ml-3 text-xl font-bold">Dashboard</span>
              </NavLink> */}
              <NavLink
                to="#"
                onClick={() => handleMenuClick("CAdmin")}
                className="flex items-center h-12 px-4 font-semibold text-gray-500 transition duration-200 rounded-md hover:text-blue-600 hover:bg-blue-50"
              >
                <FaPlus className="text-xl text-gray-600 hover:text-blue-600" />
                <span className="ml-3 text-xl font-bold">Create Admin</span>
              </NavLink>
              <NavLink
                to="#"
                onClick={() => handleMenuClick("EAdmin")}
                className="flex items-center h-12 px-4 font-semibold text-gray-500 transition duration-200 rounded-md hover:text-blue-600 hover:bg-blue-50"
              >
                <RiAdminLine className="text-xl text-gray-600 hover:text-blue-600" />
                <span className="ml-3 text-xl font-bold">Edit Admin</span>
              </NavLink>
              {/* <NavLink
                to="#"
                onClick={() => handleMenuClick("ESaler")}
                className="flex items-center h-12 px-4 font-semibold text-gray-500 transition duration-200 rounded-md hover:text-blue-600 hover:bg-blue-50"
              >
                <RiAdminLine className="text-xl text-gray-600 hover:text-blue-600" />
                <span className="ml-3 text-xl font-bold">Edit Saler</span>
              </NavLink> */}
              <NavLink to="#" onClick={() => handleMenuClick("CCategory")} className="flex items-center h-12 px-4 font-semibold text-gray-500 transition duration-200 rounded-md hover:text-blue-600 hover:bg-blue-50">
              <FaPlus className="text-xl text-gray-600 hover:text-blue-600" />
              <span className="ml-3 text-xl font-bold">Create Category</span>
              </NavLink>
              <NavLink to="#" onClick={() => handleMenuClick("ECategory")} className="flex items-center h-12 px-4 font-semibold text-gray-500 transition duration-200 rounded-md hover:text-blue-600 hover:bg-blue-50">
              <FaPlus className="text-xl text-gray-600 hover:text-blue-600" />
              <span className="ml-3 text-xl font-bold">Edit Category</span>
              </NavLink>
              <NavLink to="#" onClick={() => handleMenuClick("AStore")} className="flex items-center h-12 px-4 font-semibold text-gray-500 transition duration-200 rounded-md hover:text-blue-600 hover:bg-blue-50">
              <FaPlus className="text-xl text-gray-600 hover:text-blue-600" />
              <span className="ml-3 text-xl font-bold">Create Store</span>
              </NavLink>
              <NavLink to="#" onClick={() => handleMenuClick("EStore")} className="flex items-center h-12 px-4 font-semibold text-gray-500 transition duration-200 rounded-md hover:text-blue-600 hover:bg-blue-50">
              <FaEdit className="text-xl text-gray-600 hover:text-blue-600" />
              <span className="ml-3 text-xl font-bold">Eidit Store</span>
              </NavLink>
              <NavLink to="#" onClick={() => handleMenuClick("add-product")} className="flex items-center h-12 px-4 font-semibold text-gray-500 transition duration-200 rounded-md hover:text-blue-600 hover:bg-blue-50">
                <FaPlus className="text-xl text-gray-600 hover:text-blue-600" />
                <span className="ml-3 text-xl font-bold">Add Product</span>
              </NavLink>
              <NavLink to="#" onClick={() => handleMenuClick("edit-product")} className="flex items-center h-12 px-4 font-semibold text-gray-500 transition duration-200 rounded-md hover:text-blue-600 hover:bg-blue-50">
                <FaEdit className="text-xl text-gray-600 hover:text-blue-600" />
                <span className="ml-3 text-xl font-bold">Edit Product</span>
              </NavLink>
             
              {/* Add more NavLinks here */}
              <NavLink
                to="/"
                className="flex items-center h-12 px-4 font-semibold text-gray-500 transition duration-200 rounded-md hover:text-blue-600 hover:bg-blue-50"
              >
                <IoIosLogOut className="text-2xl text-gray-600 hover:text-blue-600" />
                <span className="ml-3 text-xl font-bold">LogOut</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 ml-0 lg:p-8 lg:ml-64">
        <button
          className="absolute text-gray-600 lg:hidden top-4 left-4"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Conditional Rendering Based on Active Page */}
        {activePage === "dashboard" && (
          <div>
            <div className="p-3 mb-4 bg-white shadow-2xl rounded-xl">
              <div className="p-4 bg-gray-200 shadow-2xl rounded-xl">
                <div className="flex flex-col items-center justify-between mb-6 lg:flex-row">
                  <h1 className="text-3xl font-semibold text-gray-800">
                    Dashboard
                  </h1>
                  <button className="px-4 py-2 text-white transition duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
                    Add New Product
                  </button>
                </div>
                {/* Stats Section */}
                <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex flex-col items-center p-4 text-white bg-blue-600 rounded-lg shadow-lg sm:ml-0 sm:mr-0">
                    <AiOutlineOrderedList className="text-2xl" />
                    <h3 className="text-xl font-semibold">Orders</h3>
                    <span className="text-4xl font-bold">250</span>
                    <p>Pending Orders</p>
                  </div>
                  <div className="flex flex-col items-center p-4 text-white bg-green-600 rounded-lg shadow-lg sm:ml-0 sm:mr-0">
                    <AiOutlineProduct className="text-2xl" />
                    <h3 className="text-xl font-semibold">Products</h3>
                    <span className="text-4xl font-bold">100</span>
                    <p>In Stock</p>
                  </div>
                  <div className="flex flex-col items-center p-4 text-white bg-orange-600 rounded-lg shadow-lg sm:ml-0 sm:mr-0">
                    <FaUsers className="text-2xl" />
                    <h3 className="text-xl font-semibold">Customers</h3>
                    <span className="text-4xl font-bold">120</span>
                    <p>Active Customers</p>
                  </div>
                  <div className="flex flex-col items-center p-4 text-white bg-red-600 rounded-lg shadow-lg sm:ml-0 sm:mr-0">
                    <FcSalesPerformance className="text-2xl" />
                    <h3 className="text-xl font-semibold">Sales</h3>
                    <span className="text-4xl font-bold">5,000</span>
                    <p>Total Sales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === "CAdmin" && <CAdmin />}
        {activePage === "EAdmin" && <EAdmin />}
        {activePage === "CCategory" && <CCategory />}
        {activePage === "ECategory" && <ECAtegory />}
        {activePage === "AStore" && <AStore />}
        {activePage === "EStore" && <EStore />}
        {activePage === "add-product" && <AProduct />}
        {activePage === "edit-product" && <EProduct />}
        {activePage === "ESaler" && <SSaler />}

      </div>
    </div>
  );
};

export default ADashboard;
