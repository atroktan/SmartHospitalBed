import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // Untuk mengetahui rute aktif

  const navItems = [
    { name: 'Dashboard', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l7 7 7 7M19 10v10a1 1 0 01-1 1h-3m-10 0V9a1 1 0 011-1h6a1 1 0 011 1v11a1 1 0 01-1 1h-6a1 1 0 01-1-1z"></path>
      </svg>
    ), path: '/dashboard' },
    { name: 'Patient', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M12 20.61c-3.136 0-6.096-1.579-8-4.195a12 12 0 0116 0c-1.904 2.616-4.864 4.195-8 4.195z"></path>
      </svg>
    ), path: '/dashboard/patient' },
    { name: 'Tables', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
      </svg>
    ), path: '/dashboard/tables' },
    { name: 'Articles', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v10m2-2l-3 3m0 0l-3-3m3 3V3"></path>
      </svg>
    ), path: '/dashboard/articles' },
    { name: 'Profile', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
      </svg>
    ), path: '/dashboard/profile' },
  ];

  return (
    <div className="w-64 bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between h-[calc(100vh-48px)] my-6 ml-6"> {/* Added my-6 ml-6 for margin */}
      <div>
        <div className="flex items-center space-x-2 mb-8">
          <span className="text-xl font-bold text-blue-800">SMART HOSPITAL BED</span>
        </div>
        <nav className="space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors
                ${location.pathname === item.path ? 'bg-blue-100 text-blue-600 font-semibold' : ''}
              `}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
              {location.pathname === item.path && (
                <div className="w-1 h-6 bg-blue-600 rounded-full ml-auto"></div>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* Log out section */}
      <div className="mt-auto">
        <button className="flex items-center p-3 w-full rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          <span className="ml-3">Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;