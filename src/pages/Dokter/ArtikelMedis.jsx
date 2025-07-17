import React, { useState, useEffect } from 'react';

export default function ArtikelMedis() {
  const [articles, setArticles] = useState([]);
  const [form, setForm] = useState({
    title: '',
    author: '',
    description: '',
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('medArticles')) || [];
    setArticles(stored);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      ...form,
      id: Date.now(),
      date: new Date().toLocaleDateString('id-ID'),
    };

    const updated = [newArticle, ...articles];
    localStorage.setItem('medArticles', JSON.stringify(updated));
    setArticles(updated);
    setForm({ title: '', author: '', description: '' });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Artikel Medis</h1>

      {/* Form Tambah Artikel */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-8 space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Judul Artikel</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Penulis</label>
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Deskripsi / Ringkasan</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Tambah Artikel
        </button>
      </form>

      {/* Daftar Artikel */}
      <div className="space-y-6">
        {articles.length === 0 ? (
          <p className="text-gray-600">Belum ada artikel ditambahkan.</p>
        ) : (
          articles.map((article) => (
            <div key={article.id} className="bg-white p-5 shadow rounded-lg">
              <h2 className="text-xl font-semibold text-blue-700">{article.title}</h2>
              <p className="text-sm text-gray-500">
                Oleh {article.author} • {article.date}
              </p>
              <p className="mt-2 text-gray-700">{article.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
