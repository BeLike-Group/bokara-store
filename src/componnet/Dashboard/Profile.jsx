import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import the icons

const Profile = () => {
  // Sample initial data for the profile
  const initialProfile = {
    username: "Jane Doe",
    email: "janedoe@example.com",
    password: "password123", // Sample password
    profilePic: "https://www.pngfind.com/pngs/m/19-195264_business-professional-png-black-man-business-png-transparent.png",
  };

  // State for profile data
  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(profile.username);
  const [newEmail, setNewEmail] = useState(profile.email);
  const [newPassword, setNewPassword] = useState(profile.password);
  const [newProfilePic, setNewProfilePic] = useState(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State to toggle password visibility

  // Handle the profile picture change
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setNewProfilePic(URL.createObjectURL(file)); // Preview the selected image
  };

  // Handle save changes
  const handleSaveChanges = (e) => {
    e.preventDefault();
    setProfile({
      username: newUsername,
      email: newEmail,
      password: newPassword,
      profilePic: newProfilePic || profile.profilePic,
    });
    setIsEditing(false);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="max-w-4xl mx-auto p-3 bg-white rounded-lg shadow-md">
      <div className="bg-gray-200 p-6 border-xl rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          {isEditing ? "Edit Profile" : "Profile Details"}
        </h1>

        {/* Profile Picture */}
        <div className="flex justify-center mb-8">
          <div className=" rounded-full  overflow-hidden w-56 h-56">
            <img
              src={newProfilePic || profile.profilePic}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          {isEditing && (
            <div>
              <label
                htmlFor="profile-pic"
                className="ml-4 cursor-pointer text-blue-600 hover:text-blue-800 text-sm"
              >
                Change Picture
              </label>
              <input
                type="file"
                id="profile-pic"
                accept="image/*"
                onChange={handleProfilePicChange}
                className="hidden"
              />
            </div>
          )}
        </div>

        {/* Profile Form */}
        <form
          onSubmit={handleSaveChanges}
          className="space-y-6"
          autoComplete="off"
        >
          {/* Username */}
          <div className="flex flex-col sm:flex-row items-center space-x-4 mb-4">
            <label htmlFor="username" className="w-full sm:w-1/4 text-gray-600 font-semibold text-lg">
              Username
            </label>
            {isEditing ? (
              <input
                type="text"
                id="username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
            ) : (
              <span className="text-gray-700 text-lg">{profile.username}</span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col sm:flex-row items-center space-x-4 mb-4">
            <label htmlFor="email" className="w-full sm:w-1/4 text-gray-600 font-semibold text-lg">
              Email
            </label>
            {isEditing ? (
              <input
                type="email"
                id="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
            ) : (
              <span className="text-gray-700 text-lg">{profile.email}</span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col sm:flex-row items-center space-x-4 mb-6">
            <label htmlFor="password" className="w-full sm:w-1/4 text-gray-600 font-semibold text-lg">
              Password
            </label>
            {isEditing ? (
              <div className="flex items-center space-x-4 w-full">
                <input
                  type={isPasswordVisible ? "text" : "password"} // Toggle between password and text
                  id="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility} // Toggle password visibility
                  className="text-gray-600"
                >
                  {isPasswordVisible ? (
                    <FaEyeSlash size={24} />
                  ) : (
                    <FaEye size={24} />
                  )}
                </button>
              </div>
            ) : (
              <span className="text-gray-700 text-lg">{profile.password}</span> // Display password in details
            )}
          </div>

          {/* Buttons: Edit or Save */}
          <div className="flex justify-end space-x-4">
            {!isEditing ? (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="px-6 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Edit Profile
              </button>
            ) : (
              <div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="ml-4 px-6 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
