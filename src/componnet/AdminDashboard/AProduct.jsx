import React, { useState } from "react";

const AProduct = () => {
  // State for form inputs
  const [productName, setProductName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [availableInWarehouse, setAvailableInWarehouse] = useState(false);
  const [category, setCategory] = useState(""); // Store selected category
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState("");
  const [images, setImages] = useState([]); // State for multiple images

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      name: productName,
      shortDescription,
      description,
      price,
      availableInWarehouse,
      category, // Add category to product data
      brand,
      stock,
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
        <h1 className="mb-6 text-3xl font-semibold text-gray-800">Add Product</h1>

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

          {/* Short Description */}
          <div className="flex items-center space-x-4">
            <label htmlFor="short-description" className="w-1/4 font-bold text-gray-600">
              Short Description
            </label>
            <input
              type="text"
              id="short-description"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Full Description */}
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

          {/* Price */}
          <div className="flex items-center space-x-4">
            <label htmlFor="price" className="w-1/4 font-bold text-gray-600">
              Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Available in Warehouse */}
          <div className="flex items-center space-x-4">
            <label htmlFor="available-in-warehouse" className="w-1/4 font-bold text-gray-600">
              Available in Warehouse
            </label>
            <input
              type="checkbox"
              id="available-in-warehouse"
              checked={availableInWarehouse}
              onChange={(e) => setAvailableInWarehouse(e.target.checked)}
              className="w-5 h-5 text-blue-600"
            />
          </div>

          {/* Category */}
          <div className="flex items-center space-x-4">
            <label htmlFor="category" className="w-1/4 font-bold text-gray-600">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home-appliances">Home Appliances</option>
              {/* Add more categories as needed */}
            </select>
          </div>

          {/* Brand */}
          <div className="flex items-center space-x-4">
            <label htmlFor="brand" className="w-1/4 font-bold text-gray-600">
              Brand
            </label>
            <input
              type="text"
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Stock */}
          <div className="flex items-center space-x-4">
            <label htmlFor="stock" className="w-1/4 font-bold text-gray-600">
              Stock
            </label>
            <input
              type="number"
              id="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
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
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AProduct;
