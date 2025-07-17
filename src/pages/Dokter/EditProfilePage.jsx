import React, { useState } from 'react';

const EditProfilePage = () => {
  const [profile, setProfile] = useState({
    username: 'Dr. Farosania Amanda',
    email: 'farosania23@gmail.com',
    birthPlaceDate: 'Pasuruan, 10 Agustus 2004',
    password: 'dr@ocal12',
    image: '/profile.png',
  });

  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
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
    <div className="p-6 bg-gray-100 min-h-screen">
     <div className="flex items-center gap-3 mb-6">
  <button
    onClick={() => window.history.back()} // atau gunakan navigate(-1) dari React Router
    className="flex items-center justify-center w-9 h-9 rounded-full border border-blue-500 text-blue-600 hover:bg-blue-100 transition"
    aria-label="Kembali"
  >
    ←
  </button>
  <h1 className="text-2xl font-semibold text-gray-800">Edit Profil</h1>
</div>



      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Edit Profil</h2>

        {/* FOTO PROFIL */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative w-20 h-20">
            <img
              src={profile.image}
              className="w-20 h-20 rounded-full object-cover border"
              alt="Profile"
            />
            <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-1.5 rounded-full cursor-pointer text-xs">
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
            <p className="font-semibold text-lg">Dr. Farosania A.</p>
            <p className="text-gray-500 text-sm">farosania23@gmail.com</p>
          </div>
        </div>

        {/* INPUT FIELD */}
        <div className="space-y-5">
          {[
            { label: 'Username', field: 'username' },
            { label: 'Email', field: 'email' },
            { label: 'Tempat Tanggal Lahir', field: 'birthPlaceDate' },
            { label: 'Password', field: 'password' },
          ].map(({ label, field }) => (
            <div key={field}>
              <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
              <div className="flex items-center border rounded-md p-2 justify-between bg-gray-50">
                <input
                  type={field === 'password' ? 'password' : 'text'}
                  className="bg-transparent w-full focus:outline-none"
                  value={profile[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                />
                <button className="text-blue-600 text-sm hover:underline ml-4">ubah</button>
              </div>
            </div>
          ))}
        </div>

        {/* SAVE BUTTON */}
        <div className="flex justify-end mt-10">
          <button className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
