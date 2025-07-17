import React, { useState } from 'react';

const dummyPatients = [
  { id: 1, name: 'Andi Pratama', lastUpdated: '2025-07-15 10:00' },
  { id: 2, name: 'Siti Nurhaliza', lastUpdated: '2025-07-14 17:45' },
  { id: 3, name: 'Budi Santoso', lastUpdated: '2025-07-13 14:30' },
];

export default function DiagnosaRekomendasi() {
  const [entries, setEntries] = useState({});
  const [editing, setEditing] = useState({});

  const handleChange = (id, field, value) => {
    setEntries((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  };

  const handleFileChange = (id, file) => {
    setEntries((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        attachment: file,
      },
    }));
  };

  const handleSubmit = (id) => {
    const data = entries[id];
    if (!data?.diagnosis || !data?.recommendation) {
      alert('Lengkapi diagnosa dan rekomendasi terlebih dahulu.');
      return;
    }

    alert(`Data untuk ${dummyPatients.find((p) => p.id === id).name} berhasil disimpan.`);
    console.log({ id, ...data });
    setEditing((prev) => ({ ...prev, [id]: false }));
  };

  const handleReset = (id) => {
    setEntries((prev) => ({
      ...prev,
      [id]: {},
    }));
    setEditing((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Diagnosa dan Rekomendasi</h1>

      <div className="space-y-6">
        {dummyPatients.map((patient) => (
          <div
            key={patient.id}
            className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-bold text-lg">👤 {patient.name}</p>
                <p className="text-sm text-gray-500">📅 Terakhir diperbarui: {patient.lastUpdated}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">Diagnosa</label>
                <textarea
                  rows="2"
                  disabled={!editing[patient.id]}
                  className={`w-full border px-3 py-2 rounded ${editing[patient.id] ? 'bg-white' : 'bg-gray-100'}`}
                  value={entries[patient.id]?.diagnosis || ''}
                  onChange={(e) => handleChange(patient.id, 'diagnosis', e.target.value)}
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">Rekomendasi Tindakan</label>
                <textarea
                  rows="2"
                  disabled={!editing[patient.id]}
                  className={`w-full border px-3 py-2 rounded ${editing[patient.id] ? 'bg-white' : 'bg-gray-100'}`}
                  value={entries[patient.id]?.recommendation || ''}
                  onChange={(e) => handleChange(patient.id, 'recommendation', e.target.value)}
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">📎 Upload Lampiran</label>
                <input
                  type="file"
                  disabled={!editing[patient.id]}
                  onChange={(e) => handleFileChange(patient.id, e.target.files[0])}
                  className="block w-full text-sm text-gray-700 file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>

              <div className="flex gap-2 justify-end">
                {editing[patient.id] ? (
                  <>
                    <button
                      onClick={() => handleSubmit(patient.id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Simpan
                    </button>
                    <button
                      onClick={() => handleReset(patient.id)}
                      className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                    >
                      Reset
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setEditing((prev) => ({ ...prev, [patient.id]: true }))}
                    className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
