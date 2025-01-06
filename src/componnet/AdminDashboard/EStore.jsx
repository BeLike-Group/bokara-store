import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

// Dummy data for products (now including additional fields)
const initialProducts = [
  {
    id: 1,
    productName: "Sample Product 1",
    description: "Short description 1",
    street: "This is a sample product description.",
    state: 50,
    country: "USA",
    city: "New York",
    zipcode: "10001",
    phone: "123-456-7890",
    email: "product1@example.com",
    images: "image1.jpg", // Example image
  },
  {
    id: 2,
    productName: "Sample Product 2",
    description: "Short description 2",
    street: "This is another sample product description.",
    state: 30,
    country: "USA",
    city: "Los Angeles",
    zipcode: "90001",
    phone: "987-654-3210",
    email: "product2@example.com",
    images: "image2.jpg", // Example image
  },
];

const EStore = () => {
  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Handle delete product
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Handle open modal for editing product
  const handleEdit = (product) => {
    setCurrentProduct(product);
    setShowModal(true);
  };

  // Handle form submission for editing
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = { ...currentProduct };
    setProducts(
      products.map((product) =>
        product.id === currentProduct.id ? updatedProduct : product
      )
    );
    setShowModal(false); // Close the modal
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCurrentProduct({
        ...currentProduct,
        images: imageUrl, // Store the image URL in the product object
      });
    }
  };

  return (
    <div className="p-2 -m-2 bg-white shadow-2xl rounded-2xl">
      <h1 className="mb-6 text-4xl font-semibold text-center text-gray-800">
        Store List
      </h1>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto sm:overflow-visible">
          <thead>
            <tr className="px-2 bg-green-300 sm:px-4">
              <th className="py-4 font-semibold text-left text-gray-700 border-b border-r px-7">
                Name
              </th>
              <th className="px-4 py-3 font-semibold text-left text-gray-700 border-b border-r">
                Description
              </th>
              <th className="px-4 py-3 font-semibold text-left text-gray-700 border-b border-r">
                State
              </th>
              <th className="px-4 py-3 font-semibold text-left text-gray-700 border-b border-r">
                Street
              </th>
              <th className="px-4 py-3 font-semibold text-left text-gray-700 border-b border-r">
                Country
              </th>
              <th className="px-4 py-3 font-semibold text-left text-gray-700 border-b border-r">
                City
              </th>
              <th className="px-4 py-3 font-semibold text-left text-gray-700 border-b border-r">
                Zipcode
              </th>
              <th className="px-4 py-3 font-semibold text-left text-gray-700 border-b border-r">
                Phone
              </th>
              <th className="px-4 py-3 font-semibold text-left text-gray-700 border-b border-r">
                Image
              </th>
              <th className="px-4 py-3 font-semibold text-left text-gray-700 border-b border-r">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 border-r">{product.productName}</td>
                <td className="px-4 py-3 border-r">{product.description}</td>
                <td className="px-4 py-3 border-r">{product.state}</td>
                <td className="px-4 py-3 border-r">{product.street}</td>
                <td className="px-4 py-3 border-r">{product.country}</td>
                <td className="px-4 py-3 border-r">{product.city}</td>
                <td className="px-4 py-3 border-r">{product.zipcode}</td>
                <td className="px-4 py-3 border-r">{product.phone}</td>
                <td className="px-4 py-3">
                  <img
                    src={product.images}
                    alt={product.productName}
                    className="object-cover w-20 h-20 rounded-lg"
                  />
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleEdit(product)}
                    className="ml-4 text-blue-600 hover:text-blue-800"
                  >
                    <FiEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="ml-4 text-red-600 hover:text-red-800"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Editing Product */}
      {showModal && currentProduct && (
        <div className="fixed inset-0 flex items-center justify-center pt-10 pb-10 bg-gray-500 bg-opacity-75 sm:m-0">
          <div className="w-full p-3 bg-white rounded-lg shadow-xl sm:w-11/12 md:w-3/4 lg:w-1/2 overflow-y-auto max-h-[80vh]">
            <div className="p-4 bg-white shadow-2xl rounded-2xl">
              <h2 className="mb-6 text-3xl font-semibold text-gray-800">
                Edit Product
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Product Name */}
                <div className="flex flex-wrap items-center space-x-4">
                  <label
                    htmlFor="productName"
                    className="w-full font-bold text-gray-600 sm:w-1/4"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="productName"
                    value={currentProduct.productName}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        productName: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Description */}
                <div className="flex flex-wrap items-center space-x-4">
                  <label
                    htmlFor="description"
                    className="w-full font-bold text-gray-600 sm:w-1/4"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    value={currentProduct.description}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        description: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Street */}
                <div className="flex flex-wrap items-center space-x-4">
                  <label
                    htmlFor="street"
                    className="w-full font-bold text-gray-600 sm:w-1/4"
                  >
                    Street
                  </label>
                  <input
                    type="text"
                    id="street"
                    value={currentProduct.street}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        street: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* State */}
                <div className="flex flex-wrap items-center space-x-4">
                  <label
                    htmlFor="state"
                    className="w-full font-bold text-gray-600 sm:w-1/4"
                  >
                    State
                  </label>
                  <input
                    type="number"
                    id="state"
                    value={currentProduct.state}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        state: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Country */}
                <div className="flex flex-wrap items-center space-x-4">
                  <label
                    htmlFor="country"
                    className="w-full font-bold text-gray-600 sm:w-1/4"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    value={currentProduct.country}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        country: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* City */}
                <div className="flex flex-wrap items-center space-x-4">
                  <label
                    htmlFor="city"
                    className="w-full font-bold text-gray-600 sm:w-1/4"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={currentProduct.city}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        city: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Zipcode */}
                <div className="flex flex-wrap items-center space-x-4">
                  <label
                    htmlFor="zipcode"
                    className="w-full font-bold text-gray-600 sm:w-1/4"
                  >
                    Zipcode
                  </label>
                  <input
                    type="text"
                    id="zipcode"
                    value={currentProduct.zipcode}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        zipcode: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-wrap items-center space-x-4">
                  <label
                    htmlFor="phone"
                    className="w-full font-bold text-gray-600 sm:w-1/4"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={currentProduct.phone}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Image Upload */}
                <div className="flex flex-wrap items-center space-x-4">
                  <label
                    htmlFor="image"
                    className="w-full font-bold text-gray-600 sm:w-1/4"
                  >
                    Product Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    onChange={handleImageChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
                  {currentProduct.images && (
                    <img
                      src={currentProduct.images}
                      alt="Preview"
                      className="object-cover w-20 h-20 mt-2 rounded-lg"
                    />
                  )}
                </div>

                <div className="flex justify-between mt-6">
                  {/* <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-6 py-3 text-white bg-red-500 rounded-lg"
                  >
                    Close
                  </button> */}
                  <button
                    type="submit"
                    className="px-6 py-3 text-white bg-blue-500 rounded-lg"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EStore;
