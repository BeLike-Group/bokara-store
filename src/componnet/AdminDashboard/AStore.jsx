import React, { useState } from "react";

const AStore = () => {
  // State for form inputs
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [address, setAddress] = useState("");
  const [street, setStreet] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      productName,
      description,
      address: {
        street,
        zipCode,
        country,
        state,
        city,
      },
      contact: {
        phone,
        email,
      },
      images,
    };

    // You can integrate the API logic here for adding the product to your database
    console.log("Product added:", productData);
  };

  // Handle image file change
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]); // Append new images to the existing ones
  };

  // Handle removing an image
  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl p-3 mx-auto bg-white rounded-lg shadow-xl">
      <div className="p-4 bg-gray-200 shadow-2xl rounded-2xl">
        <h1 className="mb-6 text-3xl font-semibold text-gray-800">Add Store</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <div className="flex items-center space-x-4">
            <label htmlFor="product-name" className="w-1/4 font-bold text-gray-600">
              Product Name
            </label>
            <input
              type="text"
              id="product-name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div className="flex items-center space-x-4">
            <label htmlFor="description" className="w-1/4 font-bold text-gray-600">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>

          {/* Address */}
          <div className="flex items-center space-x-4">
            <label htmlFor="street" className="w-1/4 font-bold text-gray-600">
              Street
            </label>
            <input
              type="text"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Zip Code */}
          <div className="flex items-center space-x-4">
            <label htmlFor="zip-code" className="w-1/4 font-bold text-gray-600">
              Zip Code
            </label>
            <input
              type="text"
              id="zip-code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Country */}
          <div className="flex items-center space-x-4">
            <label htmlFor="country" className="w-1/4 font-bold text-gray-600">
              Country
            </label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* State */}
          <div className="flex items-center space-x-4">
            <label htmlFor="state" className="w-1/4 font-bold text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* City */}
          <div className="flex items-center space-x-4">
            <label htmlFor="city" className="w-1/4 font-bold text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Contact Information */}
          <div className="flex items-center space-x-4">
            <label htmlFor="phone" className="w-1/4 font-bold text-gray-600">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex items-center space-x-4">
            <label htmlFor="email" className="w-1/4 font-bold text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Images */}
          <div className="flex items-center space-x-4">
            <label htmlFor="images" className="w-1/4 font-bold text-gray-600">
              Images
            </label>
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Display selected images */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Selected Images</h2>
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Product Image ${index + 1}`}
                    className="object-cover w-full h-32 rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-0 right-0 p-1 text-white bg-red-600 rounded-full"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Store
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AStore;
