import React, { useState, useEffect } from 'react';

export default function TindakanHariIni() {
  const [namaPasien, setNamaPasien] = useState('');
  const [tindakan, setTindakan] = useState('');
  const [catatan, setCatatan] = useState('');
  const [listTindakan, setListTindakan] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('tindakanHariIni')) || [];
    setListTindakan(data);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!namaPasien || !tindakan) {
      alert('Isi nama pasien dan tindakan!');
      return;
    }

    const newEntry = {
      id: Date.now(),
      namaPasien,
      tindakan,
      catatan,
      waktu: new Date().toLocaleString(),
    };

    const updatedList = [...listTindakan, newEntry];
    setListTindakan(updatedList);
    localStorage.setItem('tindakanHariIni', JSON.stringify(updatedList));

    setNamaPasien('');
    setTindakan('');
    setCatatan('');
  };

  return (
    <div className="px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Tindakan Hari Ini</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-8 space-y-4">
        <div>
          <label className="block mb-1 font-medium">Nama Pasien</label>
          <input
            type="text"
            value={namaPasien}
            onChange={(e) => setNamaPasien(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Masukkan nama pasien"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Jenis Tindakan</label>
          <select
            value={tindakan}
            onChange={(e) => setTindakan(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="">-- Pilih Tindakan --</option>
            <option>Pemeriksaan kondisi fisik</option>
            <option>Penggantian posisi tidur</option>
            <option>Pemberian obat</option>
            <option>Pencatatan sensor (suhu/detak jantung)</option>
            <option>Tindakan perawatan luka</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Catatan Tambahan</label>
          <textarea
            value={catatan}
            onChange={(e) => setCatatan(e.target.value)}
            rows={3}
            className="w-full border px-3 py-2 rounded"
            placeholder="Opsional: keterangan tambahan..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          Simpan Tindakan
        </button>
      </form>

      <div>
        <h2 className="text-lg font-semibold mb-4">Riwayat Tindakan Hari Ini</h2>
        {listTindakan.length === 0 ? (
          <p className="text-gray-500 italic">Belum ada tindakan tercatat.</p>
        ) : (
          <ul className="space-y-3">
            {listTindakan.map((item) => (
              <li
                key={item.id}
                className="bg-white shadow rounded p-4 border border-gray-100"
              >
                <p className="text-sm text-gray-600">{item.waktu}</p>
                <p><strong>Pasien:</strong> {item.namaPasien}</p>
                <p><strong>Tindakan:</strong> {item.tindakan}</p>
                {item.catatan && <p><strong>Catatan:</strong> {item.catatan}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
