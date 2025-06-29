import React from 'react';

const BodyMeasurement = () => {
  const measurements = [
    { label: 'Berat Badan', value: '68 kg' },
    { label: 'Tinggi Badan', value: '170 cm' },
    { label: 'Indeks Massa Tubuh', value: '23.5 (Normal)' },
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Pengukuran Tubuh</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {measurements.map((item, idx) => (
          <div key={idx} className="border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="text-xl font-bold text-gray-800">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyMeasurement;
