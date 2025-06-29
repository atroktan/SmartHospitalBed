import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardHeader = ({ doctorName }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Tutup dropdown ketika klik di luar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin');
  };

  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="text-xl font-semibold text-gray-800">
        Welcome, <span className="text-blue-800">{doctorName}</span>
      </h1>

      <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border rounded-md text-sm w-64"
        />
        <span className="text-gray-500 cursor-pointer">🔔</span>

        <img
          src="/profile.png"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
          onClick={() => setDropdownOpen((prev) => !prev)}
        />

        {/* Dropdown menu */}
        {dropdownOpen && (
          <div className="absolute top-12 right-0 w-40 bg-white shadow-md rounded-md py-2 z-50">
            <button
              onClick={() => {
                navigate('/dashboard/edit-profile');
                setDropdownOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              ✏️ Edit Profile
            </button>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              🔓 Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
