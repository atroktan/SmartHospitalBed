import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const PositionReminder = ({ lastChanged }) => {
  const lastChangeTime = new Date(lastChanged);
  const now = new Date();

  // Hitung selisih waktu dalam menit
  const diffMs = now - lastChangeTime;
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const hoursSinceChange = Math.floor(diffMinutes / 60);
  const minutesRemaining = 120 - diffMinutes; // 2 jam = 120 menit
  const isReminderNeeded = diffMinutes >= 120;

  return (
    <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
      <div className={`p-3 rounded-full ${isReminderNeeded ? 'bg-red-100' : 'bg-green-100'}`}>
        {isReminderNeeded ? (
          <AlertTriangle className="w-6 h-6 text-red-600" />
        ) : (
          <CheckCircle2 className="w-6 h-6 text-green-600" />
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">Pengingat Posisi Pasien</h3>
        <p className="text-sm text-gray-600">
          Terakhir ubah posisi tidur:{" "}
          <span className="font-medium text-gray-800">
            {lastChangeTime.toLocaleString(undefined, {
              dateStyle: 'medium',
              timeStyle: 'short',
            })}
          </span>
        </p>

        {isReminderNeeded ? (
          <p className="text-sm font-semibold text-red-600 mt-2">
            ⚠️ Sudah lebih dari 2 jam. Segera ubah posisi pasien untuk mencegah luka baring!
          </p>
        ) : (
          <p className="text-sm text-green-600 mt-2">
            ✅ Posisi pasien masih aman. Ubah posisi dalam <b>{Math.floor(minutesRemaining / 60)} jam {minutesRemaining % 60} menit</b>.
          </p>
        )}
      </div>
    </div>
  );
};

export default PositionReminder;
