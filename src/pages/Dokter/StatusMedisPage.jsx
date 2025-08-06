import React from 'react';
import { useParams } from 'react-router-dom';
import { dummyPatients } from '../../data/dummyPatients';
import VitalCard from '../../components/VitalCard';
import BodyMeasurement from '../../components/BodyMeasurement';
import HeartRateChart from '../../components/HeartRateChart';
import PositionReminder from '../../components/PositionReminder';
import TemperatureChart from '../../components/TemperatureChart';

const StatusMedisPage = () => {
  const { patientId } = useParams(); // dari path /dashboard/status-medis/:patientId
  const patient = dummyPatients.find((p) => String(p.id) === String(patientId)); // pastikan perbandingan ID aman

  if (!patient) {
    return (
      <div className="p-6 text-red-600 font-semibold">
        ❌ Pasien dengan ID #{patientId} tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Status Medis: {patient.name}
      </h1>

      {/* Vital Signs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <VitalCard title="Gula Darah" value={patient.sensors.bloodSugar} status="Normal" />
        <VitalCard title="Kadar Oksigen" value={patient.sensors.oxygen} status="Normal" />
        <VitalCard title="Tekanan Darah" value={patient.sensors.bp} status="Normal" />
      </div>

      {/* Grafik Detak Jantung */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Detak Jantung</h2>
        <HeartRateChart data={patient.sensors.heartRates} />
      </div>

      {/* Ukuran Tubuh dan Pengingat Posisi */}
      <BodyMeasurement />
      <PositionReminder lastChanged="2025-06-26T08:00:00Z" />

      {/* Grafik Suhu Tubuh */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Suhu Tubuh</h2>
        <TemperatureChart data={[36.5, 36.8, 37.2, 38.1, 37.8, 36.9, 36.6]} />
      </div>
    </div>
  );
};

export default StatusMedisPage;
