import React from "react";
import { FaYoutube, FaTiktok } from "react-icons/fa";
import logoSmartbed from "../assets/logo.png";
import support1 from "../assets/Ellipse 25.png";
import support2 from "../assets/Ellipse 28.png";
import support3 from "../assets/Ellipse 27.png";
import support4 from "../assets/Ellipse 26.png";
import support5 from "../assets/Ellipse 23.png";
import support6 from "../assets/Ellipse 24.png";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 border-t mt-10 overflow-hidden">
      {/* SVG Wave Background */}
      <div className="absolute inset-x-0 -top-2 z-0">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ffffff"
            d="M0,64L48,64C96,64,192,64,288,58.7C384,53,480,43,576,48C672,53,768,75,864,85.3C960,96,1056,96,1152,80C1248,64,1344,32,1392,16L1440,0V100H1392C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100H0Z"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-10 text-gray-700 text-sm z-10">

        {/* Kiri - Logo + Deskripsi */}
        <div className="flex gap-4 flex-1 max-w-md items-start">
          <img
            src={logoSmartbed}
            alt="LogoSmartBed"
            className="w-[90px] h-auto object-contain"
          />
          <p className="text-gray-600 leading-relaxed text-justify text-[14px]">
            <strong>Smart Hospital Bed</strong> adalah sistem informasi berbasis web yang dirancang
            untuk mendukung proses pemantauan pasien secara realtime oleh tenaga medis di rumah sakit.
          </p>
        </div>

        {/* Tengah - Logo Dukungan */}
        <div className="flex flex-col items-center flex-1">
          <p className="font-semibold mb-3 text-center">Didukung Oleh :</p>
          <div className="grid grid-cols-3 gap-x-4 gap-y-4">
            {[support1, support2, support3, support4, support5, support6].map((logo, i) => (
              <img key={i} src={logo} alt={`Logo${i + 1}`} className="h-12 w-12 object-contain" />
            ))}
          </div>
        </div>

        {/* Kanan - Sosial Media */}
        <div className="flex flex-col items-center md:items-end flex-1">
          <p className="font-semibold mb-3">Social Media</p>
          <div className="flex gap-4 text-2xl text-blue-700">
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative text-center text-xs py-4 bg-white text-blue-800 font-medium z-10">
        Copyright © 2025 Badan Kesehatan Negara. All rights reserved.
      </div>
    </footer>
  );
}
