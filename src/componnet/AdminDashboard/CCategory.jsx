import React, { useState } from "react";

const CCategory = () => {
  // State for form inputs
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [image, setImage] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      des,
      image,
    };
    console.log("Category Data Submitted:", formData);

    // Add API integration logic here
  };

  // Handle image file change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-xl">
      <h1 className="mb-6 text-3xl font-semibold text-gray-800">Create Category</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label htmlFor="description" className="mb-2 font-semibold text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={des}
            onChange={(e) => setDes(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Image */}
        <div className="flex flex-col">
          <label htmlFor="image" className="mb-2 font-semibold text-gray-700">
            Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {image && (
            <div className="mt-4">
              <img
                src={URL.createObjectURL(image)}
                alt="Selected"
                className="object-cover w-32 h-32 rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create Category
        </button>
      </form>
    </div>
  );
};

export default CCategory;
