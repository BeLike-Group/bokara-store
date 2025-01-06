import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const EAdmin = () => {
  const [data, setData] = useState([
    {
      id: 1,
      username: "JohnDoe",
      email: "john@example.com",
      password: "123456",
      image: null,
    },
    {
      id: 2,
      username: "JaneDoe",
      email: "jane@example.com",
      password: "abcdef",
      image: null,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);

  const handleEdit = (row) => {
    setCurrentRow(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentRow(null);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setData((prevData) =>
      prevData.map((item) => (item.id === currentRow.id ? currentRow : item))
    );
    closeModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentRow({ ...currentRow, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCurrentRow({ ...currentRow, image: URL.createObjectURL(file) });
    }
  };

  return (
    <div className="p-4">
      <h1 className="mb-6 text-2xl font-semibold">Edit Admin</h1>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border border-gray-300">Image</th>
            <th className="p-2 border border-gray-300">Username</th>
            <th className="p-2 border border-gray-300">Email</th>
            <th className="p-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="p-2 border border-gray-300">
                {row.image ? (
                  <img
                    src={row.image}
                    alt="User"
                    className="w-12 h-12 rounded-full"
                  />
                ) : (
                  "No Image"
                )}
              </td>
              <td className="p-2 border border-gray-300">{row.username}</td>
              <td className="p-2 border border-gray-300">{row.email}</td>
              <td className="p-2 border border-gray-300 flex items-center justify-center space-x-4">
                <button
                  onClick={() => handleEdit(row)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() =>
                    setData((prevData) => prevData.filter((item) => item.id !== row.id))
                  }
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (

        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="w-full max-w-lg sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white rounded-lg p-2 shadow-lg relative">
          <div className="bg-gray-200 rounded-xl shadow-2xl p-2  border-black">

            <h2 className="mb-4 text-xl font-semibold text-center">Edit User</h2>
            <form onSubmit={handleSave}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={currentRow.username}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={currentRow.email}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={currentRow.password}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Image
                </label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                />
                {currentRow.image && (
                  <img
                    src={currentRow.image}
                    alt="Preview"
                    className="w-16 h-16 mt-2 rounded-full"
                  />
                )}
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Save
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

export default EAdmin;
