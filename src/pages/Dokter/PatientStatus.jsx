// src/pages/doctor/PatientStatus.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";

export default function PatientStatus() {
  const { id } = useParams(); // Ambil ID pasien dari URL

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Status Medis Pasien (ID: {id})</h2>

      {/* Contoh tampilan dummy status */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Suhu Tubuh</h3>
          <p>36.8°C</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Detak Jantung</h3>
          <p>82 bpm</p>
        </div>
        {/* Tambahkan info lain seperti grafik, posisi tidur, dll */}
      </div>

      <Link to="/dashboard/patient">
        <button className="mt-6 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
          ← Kembali ke Daftar Pasien
        </button>
      </Link>
    </div>
  );
}
