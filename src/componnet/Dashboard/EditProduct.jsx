import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

// Dummy data for products (now including additional fields)
const initialProducts = [
  {
    id: 1,
    productName: "Sample Product 1",
    shortDescription: "Short description 1",
    description: "This is a sample product description.",
    price: 100,
    availableInWarehouse: true,
    category: "electronics",
    brand: "Brand A",
    stock: 50,
    images: "image1.jpg", // Example image
  },
  {
    id: 2,
    productName: "Sample Product 2",
    shortDescription: "Short description 2",
    description: "This is another sample product description.",
    price: 50,
    availableInWarehouse: false,
    category: "fashion",
    brand: "Brand B",
    stock: 30,
    images: "image2.jpg", // Example image
  },
];

const ProductTable = () => {
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
        Product List
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
                Short Description
              </th>
              <th className="px-4 py-3 font-semibold text-left text-gray-700 border-b border-r">
                Description
              </th>
              <th className="px-4 py-3 font-semibold text-left text-gray-700 border-b border-r">
                Price
              </th>
              <th className="px-4 py-3 font-semibold text-left text-gray-700 border-b border-r">
                Available in Warehouse
              </th>
              <th className="px-4 py-3 font-semibold text-left text-gray-700 border-b border-r">
                Category
              </th>
              <th className="px-4 py-3 font-semibold text-left text-gray-700 border-b border-r">
                Brand
              </th>
              <th className="px-4 py-3 font-semibold text-left text-gray-700 border-b border-r">
                Stock
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
                <td className="px-4 py-3 border-r">{product.shortDescription}</td>
                <td className="px-4 py-3 border-r">{product.description}</td>
                <td className="px-4 py-3 border-r">${product.price}</td>
                <td className="px-4 py-3 border-r">
                  {product.availableInWarehouse ? "Yes" : "No"}
                </td>
                <td className="px-4 py-3 border-r">{product.category}</td>
                <td className="px-4 py-3 border-r">{product.brand}</td>
                <td className="px-4 py-3 border-r">{product.stock}</td>
                
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
            <div className="p-4 bg-gray-200 shadow-2xl rounded-2xl">
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

                {/* Short Description */}
                <div className="flex flex-wrap items-center space-x-4">
                  <label
                    htmlFor="shortDescription"
                    className="w-full font-bold text-gray-600 sm:w-1/4"
                  >
                    Short Description
                  </label>
                  <input
                    type="text"
                    id="shortDescription"
                    value={currentProduct.shortDescription}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        shortDescription: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Category */}
               {/* Category */}
<div className="flex flex-wrap items-center space-x-4">
  <label
    htmlFor="category"
    className="w-full font-bold text-gray-600 sm:w-1/4"
  >
    Category
  </label>
  <select
    id="category"
    value={currentProduct.category}
    onChange={(e) =>
      setCurrentProduct({
        ...currentProduct,
        category: e.target.value,
      })
    }
    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  >
    <option value="electronics">Electronics</option>
    <option value="fashion">Fashion</option>
    <option value="home">Home</option>
    <option value="toys">Toys</option>
    <option value="books">Books</option>
    {/* Add more categories as needed */}
  </select>
</div>

                {/* Stock */}
                <div className="flex flex-wrap items-center space-x-4">
                  <label
                    htmlFor="stock"
                    className="w-full font-bold text-gray-600 sm:w-1/4"
                  >
                    Stock
                  </label>
                  <input
                    type="number"
                    id="stock"
                    value={currentProduct.stock}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        stock: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

               {/* Available in Warehouse */}
<div className="flex flex-wrap items-center space-x-4">
  <label
    htmlFor="availableInWarehouse"
    className="w-full font-bold text-gray-600 sm:w-1/4"
  >
    Available in Warehouse
  </label>
  <select
    id="availableInWarehouse"
    value={currentProduct.availableInWarehouse}
    onChange={(e) =>
      setCurrentProduct({
        ...currentProduct,
        availableInWarehouse: e.target.value === "true", // Convert to boolean
      })
    }
    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  >
    <option value="true">Yes</option>
    <option value="false">No</option>
  </select>
</div>


                {/* Brand */}
                <div className="flex flex-wrap items-center space-x-4">
                  <label
                    htmlFor="brand"
                    className="w-full font-bold text-gray-600 sm:w-1/4"
                  >
                    Brand
                  </label>
                  <input
                    type="text"
                    id="brand"
                    value={currentProduct.brand}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        brand: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Price */}
                <div className="flex flex-wrap items-center space-x-4">
                  <label
                    htmlFor="price"
                    className="w-full font-bold text-gray-600 sm:w-1/4"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    value={currentProduct.price}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        price: e.target.value,
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
                    Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end mt-6">
                  <button
                    type="submit"
                    className="px-6 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
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

export default ProductTable;
