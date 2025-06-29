import React, { useState } from 'react';

const EditProfilePage = () => {
  const [profile, setProfile] = useState({
    fullName: '',
    nickName: '',
    gender: '',
    country: '',
    language: '',
    timeZone: '',
    image: '/profile.png',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-2 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        Welcome, <span className="text-blue-800">Dr. Dyata Lintar Akbar</span>
      </h1>
      <p className="text-gray-500 mb-6">You’re Vibes, You’re Rules</p>

      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
        {/* FOTO + Tambah Foto */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={profile.image}
              className="w-20 h-20 rounded-full object-cover border"
              alt="Profile"
            />
            <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer text-xs">
              +
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
          <div>
            <p className="font-semibold text-lg">Dyata Lintar Akbar</p>
            <p className="text-gray-500 text-sm">dyatalintar321@gmail.com</p>
          </div>
        </div>

        {/* FORM INPUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="p-3 border rounded-lg"
            value={profile.fullName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="nickName"
            placeholder="Nick Name"
            className="p-3 border rounded-lg"
            value={profile.nickName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            className="p-3 border rounded-lg"
            value={profile.gender}
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="p-3 border rounded-lg"
            value={profile.country}
            onChange={handleChange}
          />
          <input
            type="text"
            name="language"
            placeholder="Language"
            className="p-3 border rounded-lg"
            value={profile.language}
            onChange={handleChange}
          />
          <input
            type="text"
            name="timeZone"
            placeholder="Time Zone"
            className="p-3 border rounded-lg"
            value={profile.timeZone}
            onChange={handleChange}
          />
        </div>

        {/* EMAIL */}
        <div>
          <p className="text-sm text-gray-500">My Email Address</p>
          <p className="text-gray-800 font-medium mt-1">dyatalintar321@gmail.com</p>
          <p className="text-gray-400 text-xs">1 month ago</p>
          <button className="text-blue-600 text-sm mt-2 hover:underline">+Add Email Address</button>
        </div>

        {/* BUTTON */}
        <div className="text-right">
          <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
