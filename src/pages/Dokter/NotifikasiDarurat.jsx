import React from 'react';
import { AlertTriangle, Thermometer, HeartPulse, CloudDrizzle } from 'lucide-react';

const dummyNotifications = [
  {
    id: 1,
    patientName: 'Andi Pratama',
    condition: 'Suhu Tubuh Tinggi',
    value: '39.2°C',
    time: '2025-07-16 09:24',
    icon: <Thermometer className="text-red-500 w-5 h-5 mr-2" />,
    level: 'Bahaya'
  },
  {
    id: 2,
    patientName: 'Siti Nurhaliza',
    condition: 'Detak Jantung Tidak Normal',
    value: '45 BPM',
    time: '2025-07-16 08:50',
    icon: <HeartPulse className="text-yellow-500 w-5 h-5 mr-2" />,
    level: 'Waspada'
  },
  {
    id: 3,
    patientName: 'Budi Santoso',
    condition: 'Kadar Oksigen Rendah',
    value: '89%',
    time: '2025-07-16 08:20',
    icon: <CloudDrizzle className="text-red-500 w-5 h-5 mr-2" />,
    level: 'Bahaya'
  },
];

export default function NotifikasiDarurat() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Notifikasi Darurat</h1>
      <div className="bg-white rounded shadow p-4">
        {dummyNotifications.length === 0 ? (
          <p className="text-gray-500">Tidak ada notifikasi darurat saat ini.</p>
        ) : (
          <ul className="space-y-4">
            {dummyNotifications.map((notif) => (
              <li key={notif.id} className="flex items-start border-b pb-4 last:border-none">
                <div className="mt-1">
                  {notif.icon}
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-700">{notif.patientName}</p>
                  <p className="text-sm text-gray-600">
                    {notif.condition} - <span className="font-medium">{notif.value}</span>
                  </p>
                  <p className="text-xs text-gray-400">{notif.time}</p>
                  <span
                    className={`inline-block mt-1 text-xs font-semibold px-2 py-1 rounded ${
                      notif.level === 'Bahaya'
                        ? 'bg-red-100 text-red-600'
                        : 'bg-yellow-100 text-yellow-600'
                    }`}
                  >
                    {notif.level}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
