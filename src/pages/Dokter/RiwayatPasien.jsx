import React, { useState } from 'react';

const initialData = [
  {
    id: 1,
    nik: '3576012501980001',
    name: 'Danial Fahmi',
    date: '2025-06-25',
    time: '08:30',
    action: 'Pemeriksaan tekanan darah',
    doctor: 'Dr. Dyata Lintar',
    notes: 'Tekanan normal. Tidak perlu tindakan lanjut.',
    status: 'Stabil',
    role: 'Dokter',
    category: 'Rawat Inap - BPJS',
  },
  {
    id: 2,
    nik: '3576011407980002',
    name: 'Angellia Rossetta',
    date: '2025-06-24',
    time: '14:00',
    action: 'Pemberian oksigen tambahan',
    doctor: 'Dr. Dyata Lintar',
    notes: 'Kadar oksigen turun, perlu observasi lanjutan.',
    status: 'Kritis',
    role: 'Dokter',
    category: 'Rawat Inap - Umum',
  },
  {
    id: 3,
    nik: '3576010312970003',
    name: 'Vania Kirana',
    date: '2025-06-23',
    time: '10:45',
    action: 'Ubah posisi tidur',
    doctor: 'Perawat Iin',
    notes: 'Untuk mencegah luka baring, ubah posisi setiap 2 jam.',
    status: 'Stabil',
    role: 'Perawat',
    category: 'Rawat Jalan - BPJS',
  },
];

const RiwayatPasien = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter & urutkan: kritis di atas
  const filteredData = initialData
    .filter((entry) =>
      entry.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (a.status === 'Kritis' && b.status !== 'Kritis') return -1;
      if (a.status !== 'Kritis' && b.status === 'Kritis') return 1;
      return 0;
    });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Riwayat Pasien</h1>
        <input
          type="text"
          placeholder="🔍 Cari nama pasien..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left bg-white shadow-md rounded-xl overflow-hidden">
          <thead className="bg-blue-100 text-blue-800">
            <tr>
              <th className="py-3 px-4">Tanggal</th>
              <th className="py-3 px-4">Jam</th>
              <th className="py-3 px-4">Nama Pasien</th>
              <th className="py-3 px-4">NIK</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Tindakan</th>
              <th className="py-3 px-4">Petugas</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Catatan</th>
              <th className="py-3 px-4">Kategori</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((entry) => (
                <tr key={entry.id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4">{entry.date}</td>
                  <td className="py-3 px-4">{entry.time}</td>
                  <td className="py-3 px-4">{entry.name}</td>
                  <td className="py-3 px-4">{entry.nik}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        entry.status === 'Kritis'
                          ? 'bg-red-100 text-red-600'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {entry.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{entry.action}</td>
                  <td className="py-3 px-4">{entry.doctor}</td>
                  <td className="py-3 px-4">{entry.role}</td>
                  <td className="py-3 px-4">{entry.notes}</td>
                  <td className="py-3 px-4">{entry.category}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center py-6 text-gray-500">
                  Tidak ada data yang cocok.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RiwayatPasien;
