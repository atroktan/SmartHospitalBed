import React, { useState } from 'react';

const dummySchedule = [
  {
    id: 1,
    patient: 'Andi Pratama',
    nik: '3579012300010001',
    date: '2025-07-18',
    time: '09:00',
    method: 'Offline',
    status: 'Terkonfirmasi',
    done: true, // ✅ selesai
  },
  {
    id: 2,
    patient: 'Siti Nurhaliza',
    nik: '3579012300020002',
    date: '2025-07-18',
    time: '11:00',
    method: 'Online',
    status: 'Menunggu',
    done: false, // ❌ belum
  },
  {
    id: 3,
    patient: 'Budi Santoso',
    nik: '3579012300030003',
    date: '2025-07-19',
    time: '13:30',
    method: 'Offline',
    status: 'Dibatalkan',
    done: false,
  },
];

export default function JadwalKonsultasi() {
  const [schedule, setSchedule] = useState(dummySchedule);

  const toggleDone = (id) => {
    setSchedule((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Jadwal Konsultasi</h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-blue-100 text-xs uppercase text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-3 text-left">Status Konsultasi</th>
              <th className="px-6 py-3 text-left">Pasien</th>
              <th className="px-6 py-3 text-left">NIK</th>
              <th className="px-6 py-3 text-left">Tanggal</th>
              <th className="px-6 py-3 text-left">Waktu</th>
              <th className="px-6 py-3 text-left">Metode</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Aksi</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {schedule.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-4">
                  <label className="inline-flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={item.done}
                      onChange={() => toggleDone(item.id)}
                      className="form-checkbox h-4 w-4 text-green-600"
                    />
                    <span className="text-xs">
                      {item.done ? 'Selesai' : 'Belum'}
                    </span>
                  </label>
                </td>
                <td className="px-6 py-4 font-medium text-gray-800">{item.patient}</td>
                <td className="px-6 py-4 text-gray-600">{item.nik}</td>
                <td className="px-6 py-4 text-gray-600">{item.date}</td>
                <td className="px-6 py-4 text-gray-600">{item.time}</td>
                <td className="px-6 py-4 text-gray-600">{item.method}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
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
                <td className="px-6 py-4 space-x-1">
  <button
    className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded hover:bg-blue-200"
  >
    Lihat
  </button>
  <button
    className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded hover:bg-yellow-200"
  >
    Edit
  </button>
  <button
    className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded hover:bg-red-200"
  >
    Hapus
  </button>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
