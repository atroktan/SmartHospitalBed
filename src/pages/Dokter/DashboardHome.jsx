import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardHome = () => {
  const cards = [
    { title: 'Total Patients', count: 125, color: 'bg-blue-500', icon: '👨‍⚕️' },
    { title: 'Active Patients', count: 18, color: 'bg-green-500', icon: '🛏️' },
    { title: 'Consultations Today', count: 7, color: 'bg-purple-500', icon: '📅' },
  ];

  const ageData = {
    labels: ['Anak-anak', 'Remaja', 'Dewasa', 'Lansia'],
    datasets: [{ label: 'Usia', data: [20, 30, 30, 20], backgroundColor: ['#3b82f6', '#22c55e', '#a855f7', '#ef4444'] }]
  };

  const genderData = {
    labels: ['Laki-laki', 'Perempuan'],
    datasets: [{ label: 'Jenis Kelamin', data: [50, 55], backgroundColor: ['#60a5fa', '#f472b6'] }]
  };

  const vitalStatusData = {
    labels: ['Stabil', 'Kritis', 'Pemantauan'],
    datasets: [{ label: 'Status Vital', data: [80, 10, 35], backgroundColor: ['#10b981', '#f87171', '#facc15'] }]
  };

  return (
    <div className="space-y-8">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div key={i} className={`p-6 rounded-xl text-white shadow-md ${card.color} flex items-center space-x-4`}>
            <div className="text-4xl">{card.icon}</div>
            <div>
              <p className="text-sm">{card.title}</p>
              <p className="text-2xl font-bold">{card.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard title="Pasien Berdasarkan Usia" data={ageData} note="* Update terbaru" />
        <ChartCard title="Jenis Kelamin Pasien" data={genderData} note="* Update terbaru" />
        <ChartCard title="Status Vital Pasien" data={vitalStatusData} note="* Update terbaru
        " />
      </div>
    </div>
  );
};

const ChartCard = ({ title, data, note }) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>
    <Doughnut data={data} />
    <p className="text-sm text-gray-500 mt-4 text-center">{note}</p>
  </div>
);

export default DashboardHome;
