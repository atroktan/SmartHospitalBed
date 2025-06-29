import React from 'react';
import PatientCard from '../../components/PatientCard';
import QrScannerComponent from '../../components/QrScannerComponent';
import { dummyPatients } from '../../data/dummyPatients';


const Patient = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Meet Your Patients</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {dummyPatients.map((patient) => (
          <PatientCard key={patient.id} {...patient} />
        ))}
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <QrScannerComponent onScanSuccess={(result) => alert(`QR berhasil dibaca: ${result}`)} />
        </div>
      </div>
    </div>
  );
};

export default Patient;
