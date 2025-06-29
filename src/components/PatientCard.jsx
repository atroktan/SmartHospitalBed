// src/components/PatientCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const getStatus = (bmi) => {
  if (bmi < 18.5) return { label: 'Underweight', color: 'bg-blue-100 text-blue-600' };
  if (bmi < 25) return { label: 'Healthy', color: 'bg-green-100 text-green-600' };
  if (bmi < 30) return { label: 'Overweight', color: 'bg-yellow-100 text-yellow-600' };
  return { label: 'Obese', color: 'bg-red-100 text-red-600' };
};

const PatientCard = ({ id, name, bmi, image }) => {
  const status = getStatus(bmi);

  return (
    <Link to={`/dashboard/sensor/${id}`}>
      <div className="bg-white p-3 rounded-lg shadow-md text-center text-sm hover:shadow-lg cursor-pointer transition">
        <img src={image} alt={name} className="w-17 h-20 object-cover mx-auto rounded-full mb-4" />
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">Body Mass Index (BMI)</p>
        <p className="text-xl font-bold mt-1">{bmi}</p>
        <div className={`mt-2 inline-block px-3 py-1 text-sm font-medium rounded-full ${status.color}`}>
          {status.label}
        </div>
      </div>
    </Link>
  );
};

export default PatientCard;
