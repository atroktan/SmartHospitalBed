import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Home,
  Users,
  QrCode,
  ClipboardCheck,
  History,
  FileText,
  Stethoscope,
  Upload,
  LogOut,
} from 'lucide-react';

function SidebarPerawat() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Dashboard', path: '/dashboard/perawat', icon: Home },
    { label: 'Pasien Dirawat', path: '/dashboard/perawat/pasien', icon: Users },
    { label: 'Scan QR Bed', path: '/dashboard/perawat/scanqr', icon: QrCode },
    { label: 'Tindakan Hari Ini', path: '/dashboard/perawat/tindakan', icon: ClipboardCheck },
    { label: 'Riwayat Pemberian Obat', path: '/dashboard/perawat/obat', icon: History },
    { label: 'Rekam Medis Pasien', path: '/dashboard/perawat/rekam-medis', icon: FileText },
    { label: 'Catatan Diagnosa Dokter', path: '/dashboard/perawat/diagnosa-dokter', icon: Stethoscope },
    { label: 'Upload Rekam Medis', path: '/dashboard/perawat/upload-medis', icon: Upload },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin');
  };

  return (
    <div className="w-64 bg-white shadow-md flex flex-col fixed top-0 left-0 h-screen pt-6 z-50">
      {/* Logo */}
      <div className="flex flex-col items-center justify-center mb-8 px-6 text-center leading-tight">
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-800 tracking-tight leading-snug">SMART</h1>
          <h2 className="text-lg font-semibold text-gray-700 -mt-1">HOSPITAL BED</h2>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <li key={item.path} className="mb-1">
                <Link
                  to={item.path}
                  className={`flex items-center py-2 px-6 rounded-r-full transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 font-semibold'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-blue-700' : 'text-gray-500'}`} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
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

export default SidebarPerawat;
