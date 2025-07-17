import React, { useState } from 'react';
import PatientCard from '../../components/PatientCard';
import { dummyPatients } from '../../data/dummyPatients';

const urgencyOrder = {
  Obese: 1,
  Overweight: 2,
  Healthy: 3,
  Underweight: 4,
};

const getStatus = (bmi) => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Healthy';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
};

const Patient = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAndSortedPatients = [...dummyPatients]
    .filter((patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const statusA = getStatus(a.bmi);
      const statusB = getStatus(b.bmi);
      return urgencyOrder[statusA] - urgencyOrder[statusB];
    });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Meet Your Patients</h1>
        <input
          type="text"
          placeholder="Cari pasien..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAndSortedPatients.map((patient, index) => (
          <PatientCard
            key={patient.id}
            {...patient}
            bedNumber={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Patient;
