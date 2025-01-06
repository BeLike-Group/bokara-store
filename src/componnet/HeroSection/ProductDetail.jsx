
// // ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../CartContext' // Import useCart hook

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); // Use addToCart function from context

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product); // Add product to the cart
  };


  return (
    <div className="py-8 ">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col -mx-4 md:flex-row">
          <div className="px-4 md:flex-1">
            <div className=" mb-5">
              <img
                className=" w-full  sm:h-96 h-64  border rounded-xl p-4  "
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="flex mb-4 -mx-2">
              <div className="w-1/2 px-2">
                <button className="w-full px-4 py-2 font-bold text-white bg-gray-900 rounded-full dark:bg-gray-600 hover:bg-gray-800 dark:hover:bg-gray-700" onClick={handleAddToCart}> 
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full px-4 py-2 font-bold text-white bg-gray-900 rounded-full dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="px-4 md:flex-1">
            <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
              {product.title}
            </h2>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              {product.description}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                <span className="text-gray-600 dark:text-gray-300">${product.price}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                <span className="text-gray-600 dark:text-gray-300">In Stock</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
              <div className="flex items-center mt-2">
                <button className="w-6 h-6 mr-2 bg-gray-800 rounded-full dark:bg-gray-200"></button>
                <button className="w-6 h-6 mr-2 bg-red-500 rounded-full dark:bg-red-700"></button>
                <button className="w-6 h-6 mr-2 bg-blue-500 rounded-full dark:bg-blue-700"></button>
                <button className="w-6 h-6 mr-2 bg-yellow-500 rounded-full dark:bg-yellow-700"></button>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
              <div className="flex items-center mt-2">
                <button className="px-4 py-2 mr-2 font-bold text-gray-700 bg-gray-300 rounded-full dark:bg-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600">
                  S
                </button>
                <button className="px-4 py-2 mr-2 font-bold text-gray-700 bg-gray-300 rounded-full dark:bg-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600">
                  M
                </button>
                <button className="px-4 py-2 mr-2 font-bold text-gray-700 bg-gray-300 rounded-full dark:bg-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600">
                  L
                </button>
                <button className="px-4 py-2 mr-2 font-bold text-gray-700 bg-gray-300 rounded-full dark:bg-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600">
                  XL
                </button>
                <button className="px-4 py-2 mr-2 font-bold text-gray-700 bg-gray-300 rounded-full dark:bg-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600">
                  XXL
                </button>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
            </div>
           
          </div>
        </div>
      </div>

  </div>
  );
};

export default ProductDetail;

// //  <button onClick={handleAddToCart}>Add to Cart</button> 

