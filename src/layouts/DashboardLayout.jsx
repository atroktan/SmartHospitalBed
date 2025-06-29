import React from 'react';
import SidebarDokter from '../components/SidebarDokter';
import DashboardHeader from '../components/DashboardHeader';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const doctorName = "Dr. Dyata Lintar Akbar";

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar tetap */}
      <aside className="fixed top-0 left-0 w-64 h-screen bg-white shadow-md z-20">
        <SidebarDokter />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Header: fixed agar tidak ikut scroll */}
        <header className="fixed top-0 left-64 right-0 h-20 bg-white shadow-md flex items-center px-6 z-10">
          <DashboardHeader doctorName={doctorName} />
        </header>

        {/* Konten utama dengan padding atas agar tidak ketiban header */}
        <main className="flex-1 px-6 pt-24 pb-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
