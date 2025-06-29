import React from 'react';
import QrScannerComponent from '../../components/QrScannerComponent';

const ScanQRPerawat = () => {
  const handleScan = (result) => {
    if (result) {
      alert(`QR Bed berhasil dipindai: ${result}`);
      // Kamu bisa arahkan ke detail pasien/bed: navigate(`/bed/${result}`), dll.
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Scan QR Bed</h1>

      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <QrScannerComponent onScanSuccess={handleScan} />
        </div>
      </div>
    </div>
  );
};

export default ScanQRPerawat;
