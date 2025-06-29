import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Home, User, Activity, ClipboardList,
  BellRing, Upload, FileText, LogOut
} from 'lucide-react';

function SidebarDokter() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: <Home className="w-5 h-5 mr-3" /> },
    { type: 'label', label: 'DATA PASIEN' },
    { label: 'Pasien Saya', path: '/dashboard/patient', icon: <User className="w-5 h-5 mr-3" /> },
    { label: 'Status Medis', path: '/dashboard/sensor', icon: <Activity className="w-5 h-5 mr-3" /> },
    { label: 'Riwayat Pasien', path: '/dashboard/history', icon: <ClipboardList className="w-5 h-5 mr-3" /> },
    { label: 'Notifikasi Darurat', path: '/dashboard/alert', icon: <BellRing className="w-5 h-5 mr-3" /> },
    { type: 'label', label: 'DOKUMENTASI' },
    { label: 'Upload Penanganan', path: '/dashboard/upload', icon: <Upload className="w-5 h-5 mr-3" /> },
    { label: 'Artikel Medis', path: '/dashboard/articles', icon: <FileText className="w-5 h-5 mr-3" /> },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin');
  };

  return (
    <div className="w-64 bg-white shadow-md flex flex-col fixed top-0 left-0 h-screen pt-6 z-50">
      {/* Logo Text */}
      <div className="flex flex-col items-center justify-center mb-8 px-6 text-center leading-tight">
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-800 tracking-tight leading-snug">SMART</h1>
          <h2 className="text-lg font-semibold text-gray-700 -mt-1">HOSPITAL BED</h2>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul>
          {navItems.map((item) => {
            if (item.type === 'label') {
              return (
                <li key={`label-${item.label}`} className="mb-2 mt-4">
                  <span className="text-xs font-semibold text-gray-400 uppercase px-6 tracking-wider">
                    {item.label}
                  </span>
                </li>
              );
            }

            const isActive = location.pathname.startsWith(item.path);
            const baseClasses = 'flex items-center py-2 px-6 rounded-r-full transition-colors duration-200';
            const activeClasses = isActive
              ? 'bg-blue-100 text-blue-700 font-semibold'
              : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600';

            return (
              <li key={item.path} className="mb-1">
                <Link to={item.path} className={`${baseClasses} ${activeClasses}`}>
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t mt-auto">
        <button
          onClick={handleLogout}
          className="flex items-center w-full text-left text-red-600 hover:text-red-700 transition"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Log Out
        </button>
      </div>
    </div>
  );
}

export default SidebarDokter;
