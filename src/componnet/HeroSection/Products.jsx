import React, { useEffect, useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import React Icons
import { Link } from 'react-router-dom'; // Import Link for navigation

const Products = () => {
  const [products, setProducts] = useState([]); // State to store fetched products
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category

  useEffect(() => {
    // Fetch data from the API 
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data); // Set the fetched data into state
        setFilteredProducts(data); // Initially display all products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Call the function to fetch data
  }, []); // Empty dependency array to run only once when the component mounts

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === '') {
      setFilteredProducts(products); // Show all products if no category is selected
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered); // Filter products based on the selected category
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-full px-10">
        <h1 className="flex items-center justify-center p-10 mb-0 sm:mb-0 text-2xl  font-bold text-black  sm:text-5xl md:text-6xl">
          Our Latest Products
        </h1>

        {/* Filter Section */}
        <div className="flex justify-center mb-6 space-x-2 sm:space-x-4">
          {['', 'electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {category === '' ? 'All' : category.replace(/'/g, '')}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <section
              key={product.id}
              className="p-3 py-3 text-center duration-300 transform bg-white border-gray-100 shadow-md cursor-pointer rounded-xl border hover:shadow-lg"
            >
              <div className="flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="mb-2 w-40 h-56"
                />
                <div className="flex justify-center mt-1 space-x-1">
                  {/* Star Rating using React Icons */}
                  {[...Array(3)].map((_, index) => (
                    <FaStar key={index} className="w-3 h-3 text-orange-600" />
                  ))}
                  {[...Array(2)].map((_, index) => (
                    <FaRegStar key={index} className="w-3 h-3 text-gray-300" />
                  ))}
                </div>
                <h4 className="mt-2 text-sm font-medium text-gray-700 sm:text-base">
                  {product.title}
                </h4>
                <span className="mt-2 text-base font-semibold text-green-700 sm:text-lg">
                  ${product.price}
                </span>
                <div className="flex justify-center mt-4 space-x-2">
                  <Link to={`/product/${product.id}`}>
                    <button
                      type="button"
                      className="px-3 py-1 text-xs text-white bg-green-600 rounded-md sm:text-sm hover:bg-green-700"
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
