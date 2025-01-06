// import React, { useState, useEffect } from 'react';
// import { FaCheckCircle, FaTimesCircle, FaShippingFast } from 'react-icons/fa'; // Payment & Shipping status icons

// const OrderDetails = () => {
//   const [loading, setLoading] = useState(true);

//   // Static order data array
//   const orderDetails = [
//     {
//       id: '123456',
//       customer: {
//         name: 'John Doe',
//         email: 'johndoe@example.com',
//         address: '123 Main St, Springfield, IL 62701',
//         phone: '+1 (555) 123-4567',
//       },
//       paymentStatus: 'Completed',
//       shippingStatus: 'Shipped',
//       items: [
//         { id: '1', name: 'Product 1', quantity: 2, price: 25.0, image: 'https://via.placeholder.com/100' },
//         { id: '2', name: 'Product 2', quantity: 1, price: 15.0, image: 'https://via.placeholder.com/100' },
//       ],
//       totalPrice: 65.0,
//       date: '2024-12-06T14:30:00Z',
//     },
//     {
//       id: '654321',
//       customer: {
//         name: 'Jane Smith',
//         email: 'janesmith@example.com',
//         address: '456 Elm St, Springfield, IL 62701',
//         phone: '+1 (555) 987-6543',
//       },
//       paymentStatus: 'Pending',
//       shippingStatus: 'Processing',
//       items: [
//         { id: '1', name: 'Product 3', quantity: 1, price: 30.0, image: 'https://via.placeholder.com/100' },
//         { id: '2', name: 'Product 4', quantity: 3, price: 10.0, image: 'https://via.placeholder.com/100' },
//       ],
//       totalPrice: 60.0,
//       date: '2024-12-07T10:15:00Z',
//     },
//   ];

//   useEffect(() => {
//     setLoading(false); // Simulating loading state
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center">
//         <div className="loader">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-3 bg-white rounded-lg shadow-lg">
//       {orderDetails.map((order) => {
//         const orderDate = new Date(order.date);
//         const formattedDate = orderDate.toLocaleDateString();
//         const formattedTime = orderDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//         return (
//           <div key={order.id} className='p-3 mb-6 bg-green-100 shadow-2xl rounded-xl'>
//             <h2 className="mb-4 text-3xl font-bold text-gray-800">Order #{order.id}</h2>

//             {/* Customer Information */}
//             <div className="grid grid-cols-1 gap-8 mb-6 lg:grid-cols-2">
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-700">Customer Information</h3>
//                 <div className="mt-3">
//                   <p><strong>Name:</strong> {order.customer.name}</p>
//                   <p><strong>Email:</strong> {order.customer.email}</p>
//                   <p><strong>Address:</strong> {order.customer.address}</p>
//                   <p><strong>Phone:</strong> {order.customer.phone}</p>
//                 </div>
//               </div>

//               {/* Order Status */}
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-700">Order Status</h3>
//                 <div className="flex flex-col mt-3 space-y-4">
//                   {/* Payment Status */}
//                   <div className="flex items-center space-x-2">
//                     <p><strong>Payment Status:</strong></p>
//                     <span className={order.paymentStatus === 'Completed' ? 'text-green-500' : 'text-red-500'}>
//                       {order.paymentStatus === 'Completed' ? <FaCheckCircle /> : <FaTimesCircle />}
//                       {order.paymentStatus}
//                     </span>
//                   </div>

//                   {/* Shipping Status */}
//                   <div className="flex items-center space-x-2">
//                     <p><strong>Shipping Status:</strong></p>
//                     <span className={order.shippingStatus === 'Shipped' ? 'text-blue-500' : 'text-gray-500'}>
//                       {order.shippingStatus === 'Shipped' ? <FaShippingFast /> : <FaTimesCircle />}
//                       {order.shippingStatus}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Order Items Table */}
//             <h3 className="mb-4 text-xl font-semibold text-gray-700">Order Items</h3>
//             <table className="w-full mb-6 border-collapse rounded-lg shadow-sm table-auto bg-gray-50">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th className="px-4 py-2 text-sm font-medium text-left text-gray-600 border">Item</th>
//                   <th className="px-4 py-2 text-sm font-medium text-left text-gray-600 border">Quantity</th>
//                   <th className="px-4 py-2 text-sm font-medium text-left text-gray-600 border">Price</th>
//                   <th className="px-4 py-2 text-sm font-medium text-left text-gray-600 border">Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {order.items.map((item) => (
//                   <tr key={item.id}>
//                     <td className="px-4 py-2 border">{item.name}</td>
//                     <td className="px-4 py-2 border">{item.quantity}</td>
//                     <td className="px-4 py-2 border">${item.price}</td>
//                     <td className="px-4 py-2 border">${(item.quantity * item.price).toFixed(2)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {/* Order Summary */}
//             <div className="flex justify-between mt-4">
//               <p><strong>Total Price:</strong> ${order.totalPrice}</p>
//               <p><strong>Order Date:</strong> {formattedDate} at {formattedTime}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default OrderDetails;


import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaShippingFast } from 'react-icons/fa'; // Payment & Shipping status icons

const OrderDetails = () => {
  const [loading, setLoading] = useState(true);

  // Static order data based on the new schema
  const orderDetails = [
    {
      id: '123456',
      userId: 'user123',
      products: [
        { id: '1', name: 'Product 1', quantity: 2, price: 25.0, totalprice: 50.0 },
        { id: '2', name: 'Product 2', quantity: 1, price: 15.0, totalprice: 15.0 },
      ],
      shippingaddress: {
        street: '123 Main St',
        country: 'USA',
        state: 'IL',
        city: 'Springfield',
        postal: '62701',
      },
      status: 'Shipped',
      totalPrice: 65.0,
      date: '2024-12-06T14:30:00Z',
    },
    {
      id: '654321',
      userId: 'user456',
      products: [
        { id: '1', name: 'Product 3', quantity: 1, price: 30.0, totalprice: 30.0 },
        { id: '2', name: 'Product 4', quantity: 3, price: 10.0, totalprice: 30.0 },
      ],
      shippingaddress: {
        street: '456 Elm St',
        country: 'USA',
        state: 'IL',
        city: 'Springfield',
        postal: '62701',
      },
      status: 'Processing',
      totalPrice: 60.0,
      date: '2024-12-07T10:15:00Z',
    },
  ];

  useEffect(() => {
    setLoading(false); // Simulating loading state
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  return (
    <div className="p-3 bg-white rounded-lg shadow-lg">
      {orderDetails.map((order) => {
        const orderDate = new Date(order.date);
        const formattedDate = orderDate.toLocaleDateString();
        const formattedTime = orderDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        return (
          <div key={order.id} className='p-3 mb-6 bg-green-100 shadow-2xl rounded-xl'>
            <h2 className="mb-4 text-3xl font-bold text-gray-800">Order #{order.id}</h2>

            {/* Customer Information */}
            <div className="grid grid-cols-1 gap-8 mb-6 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Shipping Address</h3>
                <div className="mt-3">
                  <p><strong>Street:</strong> {order.shippingaddress.street}</p>
                  <p><strong>City:</strong> {order.shippingaddress.city}</p>
                  <p><strong>State:</strong> {order.shippingaddress.state}</p>
                  <p><strong>Postal Code:</strong> {order.shippingaddress.postal}</p>
                  <p><strong>Country:</strong> {order.shippingaddress.country}</p>
                </div>
              </div>

              {/* Order Status */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Order Status</h3>
                <div className="flex flex-col mt-3 space-y-4">
                  {/* Order Status */}
                  <div className="flex items-center space-x-2">
                    <p><strong>Order Status:</strong></p>
                    <span className={order.status === 'Shipped' ? 'text-blue-500' : 'text-gray-500'}>
                      {order.status === 'Shipped' ? <FaShippingFast /> : <FaTimesCircle />}
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items Table */}
            <h3 className="mb-4 text-xl font-semibold text-gray-700">Order Items</h3>
            <table className="w-full mb-6 border-collapse rounded-lg shadow-sm table-auto bg-gray-50">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-sm font-medium text-left text-gray-600 border">Item</th>
                  <th className="px-4 py-2 text-sm font-medium text-left text-gray-600 border">Quantity</th>
                  <th className="px-4 py-2 text-sm font-medium text-left text-gray-600 border">Price</th>
                  <th className="px-4 py-2 text-sm font-medium text-left text-gray-600 border">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.products.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-2 border">{item.name}</td>
                    <td className="px-4 py-2 border">{item.quantity}</td>
                    <td className="px-4 py-2 border">${item.price}</td>
                    <td className="px-4 py-2 border">${item.totalprice.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Order Summary */}
            <div className="flex justify-between mt-4">
              <p><strong>Total Price:</strong> ${order.totalPrice}</p>
              <p><strong>Order Date:</strong> {formattedDate} at {formattedTime}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderDetails;
