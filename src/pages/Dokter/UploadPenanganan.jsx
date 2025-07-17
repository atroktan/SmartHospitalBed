import React, { useState } from 'react';

export default function UploadPenanganan() {
  const [form, setForm] = useState({
    patientName: '',
    description: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.patientName || !form.description || !form.file) {
      alert('Mohon lengkapi semua isian!');
      return;
    }

    const uploads = JSON.parse(localStorage.getItem('treatmentUploads')) || [];
    const newRecord = {
      id: Date.now(),
      patientName: form.patientName,
      description: form.description,
      fileName: form.file.name,
    };

    localStorage.setItem('treatmentUploads', JSON.stringify([...uploads, newRecord]));

    alert('Penanganan berhasil diunggah.');

    setForm({ patientName: '', description: '', file: null });
    document.getElementById('fileInput').value = '';
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Upload Penanganan</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-full space-y-5"
      >
        {/* Input Nama Pasien */}
        <div>
          <label htmlFor="patientName" className="block font-medium text-gray-700 mb-1">
            Nama Pasien
          </label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={form.patientName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            placeholder="Contoh: Budi Santoso"
            required
          />
        </div>

        {/* Keterangan */}
        <div>
          <label htmlFor="description" className="block font-medium text-gray-700 mb-1">
            Keterangan Tambahan / Tindak Lanjut
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            rows="5"
            placeholder="Contoh: Pasien mendapat observasi tambahan setelah diagnosa pneumonia..."
            required
          />
        </div>

        {/* Upload File */}
        <div>
          <label htmlFor="fileInput" className="block font-medium text-gray-700 mb-1">
            Upload Dokumen Penanganan (PDF / JPG / PNG)
          </label>
          <input
            type="file"
            id="fileInput"
            name="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        {/* Tombol Submit */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800"
        >
          Upload Penanganan
        </button>
      </form>
    </div>
  );
}
