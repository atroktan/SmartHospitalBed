import React from 'react';

const DashboardPerawat = () => {
  const shiftInfo = {
    time: '07.00 – 15.00 WIB',
    team: ['Perawat Lisa', 'Perawat Budi'],
    priority: 'Monitoring pasien A07, pemberian antibiotik untuk B12'
  };

  const notifications = [
    'Pasien A05 butuh pemeriksaan tekanan darah pukul 09:00',
    'Pasien C12 belum diberikan antibiotik',
  ];

  const followUps = [
    { name: 'Budi S.', room: 'A07', action: 'Cek suhu', time: '10:00' },
    { name: 'Rani T.', room: 'C11', action: 'Suntik', time: '11:30' },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Section: Status Bed di atas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 bg-blue-100 text-blue-800 rounded-xl shadow flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Bed Terisi</h3>
            <p className="text-3xl font-bold">24</p>
          </div>
          <div className="text-4xl">💺</div>
        </div>
        <div className="p-6 bg-green-100 text-green-800 rounded-xl shadow flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Bed Kosong</h3>
            <p className="text-3xl font-bold">6</p>
          </div>
          <div className="text-4xl">🛏️</div>
        </div>
      </div>

      {/* Ringkasan Shift & Notifikasi */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ringkasan Shift */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">🕒 Ringkasan Shift</h2>
          <p><strong>Waktu:</strong> {shiftInfo.time}</p>
          <p><strong>Tim Jaga:</strong> {shiftInfo.team.join(', ')}</p>
          <p><strong>Prioritas:</strong> {shiftInfo.priority}</p>
        </div>

        {/* Notifikasi Tugas */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">🔔 Notifikasi Hari Ini</h2>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            {notifications.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pemeriksaan Hari Ini */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">📋 Pemeriksaan Hari Ini</h2>
        <table className="w-full text-sm text-left text-gray-600">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="py-2">Nama</th>
              <th>Ruangan</th>
              <th>Tindakan</th>
              <th>Waktu</th>
            </tr>
          </thead>
          <tbody>
            {followUps.map((f, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-2">{f.name}</td>
                <td>{f.room}</td>
                <td>{f.action}</td>
                <td>{f.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Akses Cepat */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">⚡ Akses Cepat</h2>
        <div className="flex flex-wrap gap-4">
          {['Input Tindakan', 'Scan QR Bed', 'Laporan Darurat', 'Riwayat Pasien'].map((label, i) => (
            <button
              key={i}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Motivasi & Cuaca */}
      <div className="bg-blue-50 p-4 rounded-lg text-center text-blue-800 text-sm font-medium">
        ☀️ 30°C - "Stay hydrated and keep up the great work!"
      </div>
    </div>
  );
};

export default DashboardPerawat;
