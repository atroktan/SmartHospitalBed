import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const HeartRateChart = () => {
  const data = {
    labels: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
    datasets: [
      {
        label: 'Detak Jantung (bpm)',
        data: [75, 80, 78, 82, 85, 79],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  
  const options = {
    responsive: true,
    scales: {
      y: {
        min: 60,
        max: 100,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default HeartRateChart;
