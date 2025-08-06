import React, { useState } from 'react';

const dummyPatients = [
  { id: 1, name: 'Ahmad', nomorPasien: 'P001', nomorPendaftaran: 'ND001' },
  { id: 2, name: 'Budi', nomorPasien: 'P002', nomorPendaftaran: 'ND002' },
  { id: 3, name: 'Citra', nomorPasien: 'P003', nomorPendaftaran: 'ND003' },
];

const initialData = {
  1: [],
  2: [],
  3: [],
};

const CatatanObat = () => {
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [data, setData] = useState(initialData);
  const [editRowId, setEditRowId] = useState(null);
  const [editedRow, setEditedRow] = useState({});
  const [newRow, setNewRow] = useState(null);

  const handlePatientChange = (e) => {
    const patient = dummyPatients.find((p) => p.name === e.target.value);
    if (patient) {
      setSelectedPatient(patient);
      setSelectedPatientId(patient.id);
      setEditRowId(null);
      setNewRow(null);
    } else {
      setSelectedPatient(null);
      setSelectedPatientId(null);
    }
  };

  const handleAdd = () => {
    setNewRow({
      id: Date.now(),
      tanggal: '',
      namaObat: '',
      dosis: '',
      aturanMinum: '',
      catatan: '',
    });
  };

  const handleSaveNew = () => {
    if (
      newRow.tanggal &&
      newRow.namaObat &&
      newRow.dosis &&
      newRow.aturanMinum
    ) {
      setData((prev) => ({
        ...prev,
        [selectedPatientId]: [...prev[selectedPatientId], newRow],
      }));
      setNewRow(null);
    } else {
      alert('Semua kolom kecuali catatan wajib diisi.');
    }
  };

  const handleSave = (id) => {
    setData((prev) => ({
      ...prev,
      [selectedPatientId]: prev[selectedPatientId].map((row) =>
        row.id === id ? editedRow : row
      ),
    }));
    setEditRowId(null);
    setEditedRow({});
  };

  const handleDelete = (id) => {
    setData((prev) => ({
      ...prev,
      [selectedPatientId]: prev[selectedPatientId].filter((row) => row.id !== id),
    }));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Catatan Obat Pasien</h1>

      {/* Pilih Pasien */}
      <div className="mb-4 max-w-md">
        <label className="block mb-1 font-medium">Cari atau Pilih Pasien:</label>
        <input
          list="pasien-list"
          placeholder="Masukkan nama/NIK/No.pasien..."
          onChange={handlePatientChange}
          className="border p-2 rounded w-full"
        />
        <datalist id="pasien-list">
          {dummyPatients.map((p) => (
            <option key={p.id} value={p.name} />
          ))}
        </datalist>
      </div>

      {/* Info Pasien */}
      {selectedPatient && (
        <div className="mb-4 space-y-1 text-sm text-gray-700">
          <div><strong>Nama:</strong> {selectedPatient.name}</div>
          <div><strong>Nomor Pasien:</strong> {selectedPatient.nomorPasien}</div>
          <div><strong>Nomor Pendaftaran:</strong> {selectedPatient.nomorPendaftaran}</div>
        </div>
      )}

      {/* Tabel Obat */}
      {selectedPatientId && (
        <div>
          <div className="mb-3">
            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
            >
              + Tambah Obat
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border rounded shadow-sm">
              <thead className="bg-blue-100 text-gray-700">
                <tr>
                  <th className="p-2 text-left">Tanggal</th>
                  <th className="p-2 text-left">Nama Obat</th>
                  <th className="p-2 text-left">Dosis</th>
                  <th className="p-2 text-left">Aturan Minum</th>
                  <th className="p-2 text-left">Catatan</th>
                  <th className="p-2 text-left">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {newRow && (
                  <tr className="bg-gray-50">
                    <td className="p-2">
                      <input
                        type="date"
                        className="border rounded p-1 w-full"
                        value={newRow.tanggal}
                        onChange={(e) =>
                          setNewRow({ ...newRow, tanggal: e.target.value })
                        }
                      />
                    </td>
                    <td className="p-2">
                      <input
                        className="border rounded p-1 w-full"
                        value={newRow.namaObat}
                        onChange={(e) =>
                          setNewRow({ ...newRow, namaObat: e.target.value })
                        }
                      />
                    </td>
                    <td className="p-2">
                      <input
                        className="border rounded p-1 w-full"
                        value={newRow.dosis}
                        onChange={(e) =>
                          setNewRow({ ...newRow, dosis: e.target.value })
                        }
                      />
                    </td>
                    <td className="p-2">
                      <input
                        className="border rounded p-1 w-full"
                        value={newRow.aturanMinum}
                        onChange={(e) =>
                          setNewRow({
                            ...newRow,
                            aturanMinum: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-2">
                      <input
                        className="border rounded p-1 w-full"
                        value={newRow.catatan}
                        onChange={(e) =>
                          setNewRow({ ...newRow, catatan: e.target.value })
                        }
                      />
                    </td>
                    <td className="p-2 space-x-2">
                      <button
                        className="px-2 py-1 text-white bg-green-600 rounded"
                        onClick={handleSaveNew}
                      >
                        Simpan
                      </button>
                      <button
                        className="px-2 py-1 text-gray-600 border rounded"
                        onClick={() => setNewRow(null)}
                      >
                        Batal
                      </button>
                    </td>
                  </tr>
                )}

                {data[selectedPatientId].map((row) => (
                  <tr key={row.id} className="border-t">
                    {editRowId === row.id ? (
                      <>
                        <td className="p-2">
                          <input
                            type="date"
                            className="border rounded p-1 w-full"
                            value={editedRow.tanggal}
                            onChange={(e) =>
                              setEditedRow({ ...editedRow, tanggal: e.target.value })
                            }
                          />
                        </td>
                        <td className="p-2">
                          <input
                            className="border rounded p-1 w-full"
                            value={editedRow.namaObat}
                            onChange={(e) =>
                              setEditedRow({ ...editedRow, namaObat: e.target.value })
                            }
                          />
                        </td>
                        <td className="p-2">
                          <input
                            className="border rounded p-1 w-full"
                            value={editedRow.dosis}
                            onChange={(e) =>
                              setEditedRow({ ...editedRow, dosis: e.target.value })
                            }
                          />
                        </td>
                        <td className="p-2">
                          <input
                            className="border rounded p-1 w-full"
                            value={editedRow.aturanMinum}
                            onChange={(e) =>
                              setEditedRow({
                                ...editedRow,
                                aturanMinum: e.target.value,
                              })
                            }
                          />
                        </td>
                        <td className="p-2">
                          <input
                            className="border rounded p-1 w-full"
                            value={editedRow.catatan}
                            onChange={(e) =>
                              setEditedRow({ ...editedRow, catatan: e.target.value })
                            }
                          />
                        </td>
                        <td className="p-2 space-x-2">
                          <button
                            className="px-2 py-1 text-white bg-green-600 rounded"
                            onClick={() => handleSave(row.id)}
                          >
                            Simpan
                          </button>
                          <button
                            className="px-2 py-1 text-gray-600 border rounded"
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
                        <td className="p-2 space-x-2">
                          <button
                            className="px-2 py-1 bg-yellow-500 text-white rounded"
                            onClick={() => {
                              setEditRowId(row.id);
                              setEditedRow(row);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="px-2 py-1 bg-red-600 text-white rounded"
                            onClick={() => handleDelete(row.id)}
                          >
                            Hapus
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatatanObat;
