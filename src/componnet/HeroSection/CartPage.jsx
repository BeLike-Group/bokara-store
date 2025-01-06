import React from 'react';
import { useCart } from '../../CartContext'; // Importing the hook to manage the cart
import { FaShoppingCart } from 'react-icons/fa';

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); // Get cart and functions from context

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-8 text-center bg-white shadow-lg rounded-xl">
          <FaShoppingCart className="mb-4 text-6xl text-gray-400 animate-bounce" />
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Your Cart is Empty</h2>
          <p className="mb-6 text-gray-600">Looks like you haven’t added anything to your cart yet.</p>
          <a
            href="/products"
            className="text-lg font-semibold text-indigo-600 transition-colors hover:text-indigo-800"
          >
            Start Shopping Now
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="container ">
      <div className="sm:flex ">
        <div className="p-8 m-4  border sm:w-1/2 md:w-2/3 lg:w-[60%] rounded-xl shadow-2xl">
          <div className="flex justify-between pb-6 border-b">
            <h1 className="text-xl font-semibold">Shopping Cart</h1>
            <h2 className="text-xl font-semibold">{cart.length} Items</h2>
          </div>
          {cart.map((item) => (
            <div key={item.id} className="py-8 border-t md:flex md:py-10 lg:py-8 border-gray-50 rounded-xl">
            <div className="w-20 sm:w-28 2xl:w-24">
              <img
                src={item.image}
                alt={item.title}
                className="object-center w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-center md:pl-3 md:w-8/12 2xl:w-3/4">
              <p className="pt-2 leading-3 text-gray-800 text-sm md:pt-0">{item.id}</p>
              <div className="flex items-center justify-between w-full">
                <p className="text-lg font-black leading-none text-gray-800">{item.title}</p>
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 text-gray-600 bg-red-300 border border-gray-300 rounded-md"
                  >
                    -
                  </button>
                  <span className="mx-2 text-base font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 text-gray-600 bg-red-300 border border-gray-300 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="pt-2 text-gray-600 text-sm">Height: 10 inches</p>
              <p className="py-2 text-gray-600 text-sm">Color: Black</p>
              <p className="text-gray-600 text-sm">Composition: 100% calf leather</p>
              <div className="flex items-center justify-between pt-5">
                <div className="flex items-center gap-3">
                  <button className="p-2 text-sm text-red-500 bg-red-200 border cursor-pointer rounded-xl">
                    Add to favorites
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-sm text-red-500 bg-red-200 border cursor-pointer rounded-xl"
                  >
                    Remove
                  </button>
                </div>
                <p className="text-sm font-black text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          
          ))}
          <a href="/products" className="flex mt-8 text-sm font-semibold text-indigo-600">
            <svg
              className="w-4 mr-2 text-indigo-600 fill-current"
              viewBox="0 0 448 512"
            >
              <path
                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
              />
            </svg>
            Continue Shopping
          </a>
        </div>

        <div id="summary" className="mt-4 ml-4 mr-4 sm:mr-0 sm:ml-0  sm:w-full md:w-1/4 lg:w-1/3 border rounded-xl shadow-2xl  p-5">
          <h1 className="pb-6 text-xl font-semibold border-b">Order Summary</h1>

          {/* Items and Total Price Section */}
          <div className="flex flex-col justify-between mt-8 mb-4 text-sm sm:flex-row sm:block">
            <span className="font-semibold uppercase">Items {cart.length}</span>
            <span className="font-semibold">${totalPrice.toFixed(2)}</span>
          </div>

          {/* Shipping Section */}
          <div>
            <label className="inline-block mb-3 text-sm font-medium uppercase">Shipping</label>
            <select className="block w-full p-2 text-sm text-gray-600 border rounded-md">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>

          {/* Promo Code Section */}
          <div className="py-8">
            <label htmlFor="promo" className="inline-block mb-3 text-sm font-semibold uppercase">
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="w-full p-2 text-sm border rounded-md"
            />
          </div>

          {/* Apply Button */}
          <button className="w-full px-5 py-2 mt-3 text-sm text-white uppercase bg-red-500 rounded-md hover:bg-red-600">
            Apply
          </button>

          {/* Total Cost Section */}
          <div className="mt-8 border-t">
            <div className="flex flex-col justify-between py-6 text-sm font-semibold uppercase sm:flex-row">
              <span>Total cost</span>
              <span>${(totalPrice + 10).toFixed(2)}</span> {/* Adding shipping cost */}
            </div>
            <button className="w-full py-3 mt-3 text-sm font-semibold text-white uppercase bg-indigo-500 rounded-md hover:bg-indigo-600">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
