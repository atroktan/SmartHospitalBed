import React from 'react';

const patientHistoryData = [
  {
    id: 1,
    name: 'Danial Fahmi',
    date: '2025-06-25',
    action: 'Pemeriksaan tekanan darah',
    doctor: 'Dr. Dyata Lintar',
    notes: 'Tekanan normal. Tidak perlu tindakan lanjut.',
  },
  {
    id: 2,
    name: 'Angellia Rossetta',
    date: '2025-06-24',
    action: 'Pemberian oksigen tambahan',
    doctor: 'Dr. Dyata Lintar',
    notes: 'Kadar oksigen turun, perlu observasi lanjutan.',
  },
  {
    id: 3,
    name: 'Vania Kirana',
    date: '2025-06-23',
    action: 'Ubah posisi tidur',
    doctor: 'Perawat Iin',
    notes: 'Untuk mencegah luka baring, ubah posisi setiap 2 jam.',
  },
];

const RiwayatPasien = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Riwayat Pasien</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left bg-white shadow-md rounded-xl overflow-hidden">
          <thead className="bg-blue-100 text-blue-800">
            <tr>
              <th className="py-3 px-4">Tanggal</th>
              <th className="py-3 px-4">Nama Pasien</th>
              <th className="py-3 px-4">Tindakan</th>
              <th className="py-3 px-4">Dokter / Perawat</th>
              <th className="py-3 px-4">Catatan</th>
            </tr>
          </thead>
          <tbody>
            {patientHistoryData.map((entry) => (
              <tr key={entry.id} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4">{entry.date}</td>
                <td className="py-3 px-4">{entry.name}</td>
                <td className="py-3 px-4">{entry.action}</td>
                <td className="py-3 px-4">{entry.doctor}</td>
                <td className="py-3 px-4">{entry.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RiwayatPasien;
