import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardHeader = ({ doctorName = "dr. Andi", status = "Online" }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDateTime = () => {
    return currentTime.toLocaleString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Jakarta'
    }) + ' WIB';
  };

  const statusColor = {
    Online: 'text-green-500',
    Sibuk: 'text-yellow-500',
    Offline: 'text-gray-500',
  };

  return (
    <header className="bg-white shadow-sm px-4 py-3 w-full">
      <div className="flex flex-wrap justify-between items-center gap-3">
        {/* Kiri - Sapaan Dokter + Waktu */}
        <div className="text-sm text-gray-700 flex flex-col">
          <span className="font-semibold text-lg text-gray-800">
            Welcome, {doctorName} 👋
          </span>
          <span className="text-sm text-gray-600">🕒 {formatDateTime()}</span>
        </div>

        {/* Kanan - Foto Profil + Dropdown */}
        <div className="relative flex items-center space-x-2" ref={dropdownRef}>
          {/* Foto Profil (tanpa nama) */}
          <img
            src="/profile.png"
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute top-12 right-0 w-44 bg-white shadow-md rounded-md py-2 z-50 text-sm">
              <div className="px-4 py-2 text-gray-600 flex items-center gap-2">
                <span className={`${statusColor[status]}`}>●</span>
                <span>{status}</span>
              </div>
              <hr />
              <button
                onClick={() => {
                  navigate('/dashboard/edit-profile');
                  setDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                🔐 Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
