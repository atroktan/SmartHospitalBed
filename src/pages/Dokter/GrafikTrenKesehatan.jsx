import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Contoh data untuk beberapa pasien
const pasienData = {
  1: [
    { waktu: "01:00", suhu: 36.5, detak: 85 },
    { waktu: "03:00", suhu: 37.1, detak: 90 },
    { waktu: "05:00", suhu: 38.0, detak: 95 },
    { waktu: "07:00", suhu: 39.2, detak: 110 },
    { waktu: "09:00", suhu: 38.5, detak: 100 },
    { waktu: "11:00", suhu: 37.0, detak: 88 },
  ],
  2: [
    { waktu: "01:00", suhu: 36.2, detak: 80 },
    { waktu: "03:00", suhu: 36.8, detak: 85 },
    { waktu: "05:00", suhu: 37.5, detak: 90 },
    { waktu: "07:00", suhu: 38.0, detak: 95 },
    { waktu: "09:00", suhu: 37.2, detak: 87 },
    { waktu: "11:00", suhu: 36.6, detak: 82 },
  ],
  3: [
    { waktu: "01:00", suhu: 36.8, detak: 88 },
    { waktu: "03:00", suhu: 37.5, detak: 94 },
    { waktu: "05:00", suhu: 38.2, detak: 100 },
    { waktu: "07:00", suhu: 39.0, detak: 105 },
    { waktu: "09:00", suhu: 38.0, detak: 98 },
    { waktu: "11:00", suhu: 37.2, detak: 90 },
  ],
};

// Contoh nama pasien
const pasienList = [
  { id: 1, nama: "Pasien A" },
  { id: 2, nama: "Pasien B" },
  { id: 3, nama: "Pasien C" },
];

export default function GrafikTrenKesehatan() {
  const [selectedPasienId, setSelectedPasienId] = useState(1);

  const handleChange = (e) => {
    setSelectedPasienId(Number(e.target.value));
  };

  const data = pasienData[selectedPasienId];

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Pilih Pasien:
        </label>
        <select
          className="p-2 border rounded w-full"
          value={selectedPasienId}
          onChange={handleChange}
        >
          {pasienList.map((pasien) => (
            <option key={pasien.id} value={pasien.id}>
              {pasien.nama}
            </option>
          ))}
        </select>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Grafik Tren Kesehatan: {pasienList.find(p => p.id === selectedPasienId).nama}
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="waktu" />
          <YAxis
            yAxisId="left"
            domain={[35, 42]}
            label={{
              value: "Suhu (°C)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[60, 130]}
            label={{
              value: "Detak (bpm)",
              angle: -90,
              position: "insideRight",
            }}
          />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="suhu"
            stroke="#ff7300"
            name="Suhu Tubuh"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="detak"
            stroke="#387908"
            name="Detak Jantung"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
