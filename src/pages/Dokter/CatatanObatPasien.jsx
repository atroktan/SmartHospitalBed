import React, { useState } from 'react';

const dummyData = {
  'Pasien A': [
    {
      id: 1,
      tanggal: '2025-07-16',
      namaObat: 'Paracetamol',
      dosis: '500mg',
      aturanMinum: '2x sehari setelah makan',
      catatan: 'Untuk demam tinggi, evaluasi suhu setiap 6 jam.',
    },
  ],
  'Pasien B': [
    {
      id: 1,
      tanggal: '2025-07-15',
      namaObat: 'Amoxicillin',
      dosis: '250mg',
      aturanMinum: '3x sehari',
      catatan: 'Lanjutkan selama 5 hari, pantau reaksi alergi.',
    },
  ],
};

function CatatanObatPasien() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [data, setData] = useState(dummyData);
  const [editRowId, setEditRowId] = useState(null);
  const [editedRow, setEditedRow] = useState({});

  const handleSelect = (name) => {
    setSelectedPatient(name);
    setEditRowId(null);
  };

  const handleEdit = (row) => {
    setEditRowId(row.id);
    setEditedRow({ ...row });
  };

  const handleChange = (e, field) => {
    setEditedRow({ ...editedRow, [field]: e.target.value });
  };

  const handleSave = () => {
    const updated = data[selectedPatient].map((row) =>
      row.id === editedRow.id ? editedRow : row
    );
    setData({ ...data, [selectedPatient]: updated });
    setEditRowId(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Catatan Obat Pasien</h1>

      {/* List Pasien */}
      <div className="flex flex-wrap gap-3 mb-6">
        {Object.keys(data).map((nama) => (
          <button
            key={nama}
            onClick={() => handleSelect(nama)}
            className={`px-4 py-2 rounded-full text-sm border ${
              selectedPatient === nama
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-700 border-blue-600'
            }`}
          >
            {nama}
          </button>
        ))}
      </div>

      {/* Tabel Obat */}
      {selectedPatient && (
        <div className="overflow-x-auto">
          <h2 className="text-lg font-medium mb-3">Data Obat - {selectedPatient}</h2>
          <table className="min-w-full bg-white border border-gray-200 rounded">
            <thead>
              <tr className="bg-blue-100 text-left text-sm">
                <th className="p-3">Tanggal</th>
                <th className="p-3">Nama Obat</th>
                <th className="p-3">Dosis</th>
                <th className="p-3">Aturan Minum</th>
                <th className="p-3">Catatan Dokter</th>
                <th className="p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data[selectedPatient].map((row) => (
                <tr key={row.id} className="border-t text-sm">
                  {editRowId === row.id ? (
                    <>
                      <td className="p-2">
                        <input
                          type="date"
                          className="border rounded p-1 w-full"
                          value={editedRow.tanggal}
                          onChange={(e) => handleChange(e, 'tanggal')}
                        />
                      </td>
                      <td className="p-2">
                        <input
                          className="border rounded p-1 w-full"
                          value={editedRow.namaObat}
                          onChange={(e) => handleChange(e, 'namaObat')}
                        />
                      </td>
                      <td className="p-2">
                        <input
                          className="border rounded p-1 w-full"
                          value={editedRow.dosis}
                          onChange={(e) => handleChange(e, 'dosis')}
                        />
                      </td>
                      <td className="p-2">
                        <input
                          className="border rounded p-1 w-full"
                          value={editedRow.aturanMinum}
                          onChange={(e) => handleChange(e, 'aturanMinum')}
                        />
                      </td>
                      <td className="p-2">
                        <textarea
                          className="border rounded p-1 w-full"
                          value={editedRow.catatan}
                          onChange={(e) => handleChange(e, 'catatan')}
                        />
                      </td>
                      <td className="p-2">
                        <button
                          className="px-2 py-1 text-white bg-green-600 rounded mr-2 text-sm"
                          onClick={handleSave}
                        >
                          Simpan
                        </button>
                        <button
                          className="px-2 py-1 text-gray-600 border rounded text-sm"
                          onClick={() => setEditRowId(null)}
                        >
                          Batal
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="p-2">{row.tanggal}</td>
                      <td className="p-2">{row.namaObat}</td>
                      <td className="p-2">{row.dosis}</td>
                      <td className="p-2">{row.aturanMinum}</td>
                      <td className="p-2">{row.catatan}</td>
                      <td className="p-2">
                        <button
                          className="text-blue-600 hover:underline text-sm"
                          onClick={() => handleEdit(row)}
                        >
                          Edit
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CatatanObatPasien;
