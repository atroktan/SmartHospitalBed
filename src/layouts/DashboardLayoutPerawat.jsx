import React from 'react';
import SidebarPerawat from '../components/SidebarPerawat';
import DashboardHeaderPerawat from '../components/DashboardHeaderPerawat';
import { Outlet } from 'react-router-dom';

const DashboardLayoutPerawat = () => {
  const nurseName = "Dyata Lintar Akbar";

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar tetap di kiri */}
      <aside className="fixed top-0 left-0 w-64 h-screen bg-white shadow-md z-20">
        <SidebarPerawat />
      </aside>

      {/* Konten utama (kanan) */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Header tetap di atas */}
        <header className="fixed top-0 left-64 right-0 h-20 bg-white shadow-md flex items-center px-6 z-10">
          <DashboardHeaderPerawat nurseName={nurseName} />
        </header>

        {/* Konten dinamis dari routing */}
        <main className="flex-1 px-6 pt-24 pb-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayoutPerawat;
