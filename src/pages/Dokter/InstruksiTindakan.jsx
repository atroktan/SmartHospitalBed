import React, { useState } from 'react';

const dummyPatients = [
  { id: '1', name: 'Ahmad Fauzi' },
  { id: '2', name: 'Siti Nurhaliza' },
  { id: '3', name: 'Budi Santoso' },
];

const metodeOptions = [
  'Oral', 'Injeksi', 'Infus', 'Topikal', 'Inhalasi',
  'Rektal', 'Fisioterapi', 'Pembedahan Minor', 'Monitoring', 'Lainnya',
];

export default function InstruksiTindakanForm() {
  const [form, setForm] = useState({
    patientId: '',
    tindakan: '',
    metode: '',
    tanggal: '',
    jam: '',
    keterangan: '',
  });

  const [tindakanList, setTindakanList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.patientId && form.tindakan && form.metode && form.tanggal && form.jam) {
      setTindakanList((prev) => [...prev, form]);
      setForm({
        patientId: '',
        tindakan: '',
        metode: '',
        tanggal: '',
        jam: '',
        keterangan: '',
      });
    } else {
      alert('Harap lengkapi semua bidang yang wajib diisi!');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Instruksi Tindakan</h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-sm font-medium mb-1">Pilih Pasien</label>
          <select
            name="patientId"
            value={form.patientId}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          >
            <option value="">-- Pilih Pasien --</option>
            {dummyPatients.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Nama Tindakan</label>
          <input
            type="text"
            name="tindakan"
            value={form.tindakan}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Contoh: Pemberian Antibiotik"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Metode Tindakan</label>
          <select
            name="metode"
            value={form.metode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          >
            <option value="">-- Pilih Metode --</option>
            {metodeOptions.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Tanggal</label>
            <input
              type="date"
              name="tanggal"
              value={form.tanggal}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-1">Jam</label>
            <input
              type="time"
              name="jam"
              value={form.jam}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Keterangan (Opsional)</label>
          <textarea
            name="keterangan"
            value={form.keterangan}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            rows={3}
            placeholder="Contoh: Pantau reaksi alergi setelah tindakan"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Simpan Tindakan
        </button>
      </form>

      {tindakanList.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Daftar Instruksi</h3>
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1">Pasien</th>
                <th className="border px-2 py-1">Tindakan</th>
                <th className="border px-2 py-1">Metode</th>
                <th className="border px-2 py-1">Tanggal</th>
                <th className="border px-2 py-1">Jam</th>
                <th className="border px-2 py-1">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {tindakanList.map((t, index) => {
                const pasien = dummyPatients.find((p) => p.id === t.patientId);
                return (
                  <tr key={index}>
                    <td className="border px-2 py-1">{pasien?.name || '-'}</td>
                    <td className="border px-2 py-1">{t.tindakan}</td>
                    <td className="border px-2 py-1">{t.metode}</td>
                    <td className="border px-2 py-1">{t.tanggal}</td>
                    <td className="border px-2 py-1">{t.jam}</td>
                    <td className="border px-2 py-1">{t.keterangan}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
