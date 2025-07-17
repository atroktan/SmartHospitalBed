import React, { useState } from 'react';

const dummyObatPasien = [
  {
    nama: 'Ahmad Fauzi',
    riwayat: [
      {
        tanggal: '2025-07-15',
        obat: 'Paracetamol',
        dosis: '500mg, 3x sehari',
        catatan: 'Untuk menurunkan demam',
      },
      {
        tanggal: '2025-07-16',
        obat: 'Amoxicillin',
        dosis: '250mg, 3x sehari',
        catatan: 'Infeksi saluran pernapasan',
      },
    ],
  },
  {
    nama: 'Putri Lestari',
    riwayat: [
      {
        tanggal: '2025-07-15',
        obat: 'Ibuprofen',
        dosis: '200mg, 2x sehari',
        catatan: 'Nyeri pasca operasi',
      },
    ],
  },
];

export default function RiwayatObat() {
  const [namaPasien, setNamaPasien] = useState('');
  const [dataObat, setDataObat] = useState([]);

  const handleSearch = () => {
    const pasien = dummyObatPasien.find((p) => p.nama.toLowerCase() === namaPasien.toLowerCase());
    if (pasien) {
      setDataObat(pasien.riwayat);
    } else {
      setDataObat([]);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Riwayat Pemberian Obat</h1>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          value={namaPasien}
          onChange={(e) => setNamaPasien(e.target.value)}
          placeholder="Masukkan nama pasien"
          className="border border-gray-300 px-4 py-2 rounded w-full sm:w-1/2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Cari
        </button>
      </div>

      {dataObat.length > 0 ? (
        <table className="w-full text-sm text-left border">
          <thead className="bg-blue-100 text-blue-800">
            <tr>
              <th className="p-2 border">Tanggal</th>
              <th className="p-2 border">Nama Obat</th>
              <th className="p-2 border">Dosis</th>
              <th className="p-2 border">Catatan Dokter</th>
            </tr>
          </thead>
          <tbody>
            {dataObat.map((entry, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-2 border">{entry.tanggal}</td>
                <td className="p-2 border">{entry.obat}</td>
                <td className="p-2 border">{entry.dosis}</td>
                <td className="p-2 border">{entry.catatan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600 italic">{namaPasien ? 'Data tidak ditemukan atau belum ada catatan.' : 'Silakan cari nama pasien.'}</p>
      )}
    </div>
  );
}
