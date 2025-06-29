// src/components/TemperatureChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const TemperatureChart = ({ data = [] }) => {
  const chartData = {
    labels: data.map((_, i) => `Jam ${i + 1}`),
    datasets: [
      {
        label: 'Suhu Tubuh (°C)',
        data: data,
        borderColor: '#f97316',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 30,
        max: 45,
        title: {
          display: true,
          text: 'Suhu (°C)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Waktu',
        },
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default TemperatureChart;
