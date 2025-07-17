import React from 'react';

const dummySchedule = [
  {
    id: 1,
    patient: 'Andi Pratama',
    date: '2025-07-18',
    time: '09:00',
    method: 'Offline',
    status: 'Terkonfirmasi',
  },
  {
    id: 2,
    patient: 'Siti Nurhaliza',
    date: '2025-07-18',
    time: '11:00',
    method: 'Online',
    status: 'Menunggu',
  },
  {
    id: 3,
    patient: 'Budi Santoso',
    date: '2025-07-19',
    time: '13:30',
    method: 'Offline',
    status: 'Dibatalkan',
  },
];

export default function JadwalKonsultasi() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Jadwal Konsultasi</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Pasien</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Tanggal</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Waktu</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Metode</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dummySchedule.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 text-sm text-gray-800">{item.patient}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{item.time}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{item.method}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Terkonfirmasi'
                        ? 'bg-green-100 text-green-700'
                        : item.status === 'Menunggu'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
