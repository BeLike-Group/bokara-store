import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX, FiUser, FiSearch } from 'react-icons/fi'; // Import FiSearch icon
import { useCart } from '../../CartContext'; // Import the useCart hook
import Bokata  from '../../assets/bokata.jpeg';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  const { cart } = useCart(); // Get the cart from context
  const [searchQuery, setSearchQuery] = useState(""); // State to handle search input

  // Calculate the total items in the cart by summing the quantities
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery); // Handle search logic here
  };

  return (
    <nav className="text-white shadow-lg bg-gradient-to-r from-teal-400 to-teal-600">
      <div className="container flex items-center justify-between p-4">
        {/* Logo Section */}
        <div>
          <NavLink to="/">
            <img
              src={Bokata}
              alt="Logo"
              className="w-20 h-20 sm:w-32 rounded-full sm:ml-4 ml-4"
            />
          </NavLink>
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-1/2 md:w-1/3">
          <form onSubmit={handleSearchSubmit} className="w-full flex items-center bg-white rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 rounded-l-lg text-gray-700 focus:outline-none"
            />
            <button type="submit" className="px-4 py-2 text-white bg-teal-600 rounded-r-lg hover:bg-teal-500">
              <FiSearch className="text-xl" />
            </button>
          </form>
        </div>

        {/* Cart, Profile, and Account Buttons */}
        <div className="flex items-center space-x-4">
          {/* Add to Cart */}
          <div className="relative">
            <NavLink to="/cart" className="flex items-center transition hover:text-teal-300">
              <FiShoppingCart
                className={`text-xl ${cartCount > 0 ? 'animate-bounce' : ''}`}
              />
              {cartCount > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-2">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>

          {/* Profile Icon */}
          <NavLink to="#" className="transition hover:text-teal-300" onClick={toggleModal}>
            <FiUser className="text-xl" />
          </NavLink>

          {/* Buttons with Gradient Styling */}
          <NavLink
            to="/user-account"
            className="hidden px-6 py-2 font-semibold text-white bg-gradient-to-r from-teal-400 to-green-500 rounded-lg md:block hover:from-purple-600 hover:to-green-600 focus:ring-4 focus:ring-purple-300 transition"
          >
            User
          </NavLink>
          <NavLink
            to="/create-account"
            className="hidden px-6 py-2 font-semibold text-white bg-gradient-to-r from-teal-400 to-green-500 rounded-lg md:block hover:from-purple-600 hover:to-green-600 focus:ring-4 focus:ring-purple-300 transition"
          >
            Seller
          </NavLink>
          <NavLink
            to="/create-account"
            className="hidden px-6 py-2 font-semibold text-white bg-gradient-to-r from-teal-400 to-green-500 rounded-lg md:block hover:from-purple-600 hover:to-green-600 focus:ring-4 focus:ring-purple-300 transition"
          >
            Admin
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="p-4 space-y-2 text-white bg-teal-500 md:hidden">
          <NavLink to="/user-account" className="block px-4 py-2 mt-2 transition bg-teal-700 rounded-lg hover:bg-teal-600">
            User
          </NavLink>
          <NavLink to="/create-account" className="block px-4 py-2 mt-2 transition bg-teal-700 rounded-lg hover:bg-teal-600">
            Seller
          </NavLink>
          <NavLink to="/admin-account" className="block px-4 py-2 mt-2 transition bg-teal-700 rounded-lg hover:bg-teal-600">
            Admin
          </NavLink>
        </div>
      )}

      {/* Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg w-80">
            <div className="flex justify-end">
              <button onClick={toggleModal} className="text-xl font-bold text-teal-600">
                &times;
              </button>
            </div>
            <div className="flex flex-col items-center">
              {/* Profile Image */}
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="w-24 h-24 mb-4 rounded-full"
              />
              <form className="w-full space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <button
                  type="submit"
                  className="w-full p-2 mt-4 text-white bg-teal-600 rounded-md hover:bg-teal-500"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
