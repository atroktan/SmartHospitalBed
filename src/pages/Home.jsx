import React from "react";
import Header from "../components/Header";
import heroImage from "../assets/logohuman.png"; // Pastikan path sesuai

export default function Home() {
  return (
    <div className="min-h-screen bg-[#dadada] font-sans">
      <Header />

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] px-20 py-12 flex flex-col lg:flex-row items-center justify-between max-w-[1280px] mx-auto gap-10">
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <h1 className="text-6xl font-bold text-gray-800 leading-tight">
            <span className="text-blue-800">We care</span> <br /> about your health
          </h1>
          <p className="text-lg text-gray-700 font-medium">
            A Smart Hospital Bed Designed to Support Physical, Mental, and Social Well-being in One Solution
          </p>
        </div>

        <div className="relative w-[340px] h-[340px] flex items-center justify-center">
          <div className="absolute w-[340px] h-[340px] bg-[#e7e7e7] rounded-full z-0"></div>
          <div className="absolute w-[300px] h-[300px] bg-[#083a6f] rounded-full z-10"></div>

          <div className="absolute z-20 overflow-hidden rounded-full w-[280px] h-[300px] flex items-center justify-center">
            <img
              src={heroImage}
              alt="Doctors"
              className="object-cover w-[280px] h-[340px]"
            />
          </div>

          <div className="absolute -top-1 -left-14 bg-white shadow-md rounded-full px-4 py-2 flex items-center gap-2 z-30">
            <span className="text-blue-700 text-xl">🔍</span>
            <div>
              <div className="text-sm font-semibold">Well Qualified doctors</div>
              <div className="text-xs text-gray-500">Treat with care</div>
            </div>
          </div>

          <div className="absolute top-1/3 -right-20 transform -translate-y-1/3 bg-white shadow-md rounded-full px-4 py-2 flex items-center gap-2 z-30">
            <span className="text-blue-700 text-xl">📅</span>
            <div>
              <div className="text-sm font-semibold">Book an appointment</div>
              <div className="text-xs text-gray-500">Online appointment</div>
            </div>
          </div>

          <div className="absolute -bottom-3 -left-12 transform -translate-y-1/2 bg-white shadow-md rounded-full px-4 py-2 flex items-center gap-2 z-30">
            <span className="text-pink-600 text-xl">📞</span>
            <div>
              <div className="text-sm font-semibold">Contact no</div>
              <div className="text-xs text-blue-800 font-semibold">0819 6087 320</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-10">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Smart Bed Monitoring</h3>
              <p className="text-gray-700">Pantau data pasien seperti detak jantung dan saturasi oksigen secara real-time dari dashboard.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Emergency Alert</h3>
              <p className="text-gray-700">Sistem notifikasi otomatis jika pasien membutuhkan bantuan mendesak.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Shift & Tindakan Harian</h3>
              <p className="text-gray-700">Bantu perawat dalam mengatur tindakan harian seperti pemberian obat, pemeriksaan, dan dokumentasi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 px-6 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Dokter Kami</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Dokter-dokter terbaik kami siap memberikan layanan kesehatan yang optimal dan profesional.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <img src="https://placehold.co/100x100" alt="Dokter 1" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-gray-800">Dr. Atika Rokhma</h3>
              <p className="text-sm text-gray-500">Spesialis Penyakit Dalam</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <img src="https://placehold.co/100x100" alt="Dokter 2" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-gray-800">Dr. Dyata Lintar</h3>
              <p className="text-sm text-gray-500">Spesialis Anak</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <img src="https://placehold.co/100x100" alt="Dokter 3" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-gray-800">Dr. Budi Santoso</h3>
              <p className="text-sm text-gray-500">Spesialis Bedah</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Tentang Kami</h2>
          <p className="text-gray-700 text-lg">
            Kami adalah tim pengembang solusi rumah sakit pintar berbasis teknologi yang membantu tenaga medis
            dalam merawat pasien secara efisien, aman, dan terintegrasi. Sistem ini telah diterapkan di beberapa
            fasilitas kesehatan untuk mendukung pelayanan kesehatan yang lebih baik.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 px-6 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Hubungi Kami</h2>
          <p className="text-gray-700 text-lg mb-4">
            Anda bisa menghubungi kami melalui kontak berikut:
          </p>
          <div className="space-y-4 text-md text-gray-800 font-medium">
            <p>📞 Telepon: <span className="text-blue-700">0819 6087 320</span></p>
            <p>💬 WhatsApp: <span className="text-blue-700">0819 6087 320</span></p>
            <p>📧 Email: <span className="text-blue-700">smartbed@hospitaltech.id</span></p>
          </div>
        </div>
      </section>
    </div>
  );
}
