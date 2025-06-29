import React from 'react';

const VitalCard = ({ title, value, status }) => {
  const getColor = () => {
    if (status === 'Normal') return 'text-green-600';
    if (status === 'Warning') return 'text-yellow-500';
    return 'text-red-600';
  };

  return (
    <div className="bg-white shadow rounded-xl p-4 border-l-4 border-blue-500">
      <h3 className="text-md font-semibold text-gray-700">{title}</h3>
      <p className="text-xl font-bold text-gray-900">{value}</p>
      <p className={`text-sm mt-1 ${getColor()}`}>{status}</p>
    </div>
  );
};

export default VitalCard;
