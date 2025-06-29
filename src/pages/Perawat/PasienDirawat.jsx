import React from 'react';

const PasienDirawat = () => {
  const patients = [
    { name: 'Andi P.', room: 'A01', condition: 'Stabil' },
    { name: 'Siti R.', room: 'B03', condition: 'Kritis' },
    { name: 'Rudi T.', room: 'C05', condition: 'Perlu Observasi' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 Daftar Pasien Dirawat</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded shadow">
        <thead>
          <tr className="bg-gray-100 text-left text-sm text-gray-600 uppercase">
            <th className="py-3 px-6">Nama Pasien</th>
            <th className="py-3 px-6">Ruangan</th>
            <th className="py-3 px-6">Kondisi</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index} className="border-t text-gray-700 hover:bg-gray-50">
              <td className="py-3 px-6">{patient.name}</td>
              <td className="py-3 px-6">{patient.room}</td>
              <td className="py-3 px-6">{patient.condition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PasienDirawat;
