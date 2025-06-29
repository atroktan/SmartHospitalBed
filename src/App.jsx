import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Public Pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// Dokter Layout & Pages
import DashboardLayout from './layouts/DashboardLayout';
import DashboardHome from './pages/Dokter/DashboardHome';
import Patient from './pages/Dokter/Patient';
import StatusMedisPage from './pages/Dokter/StatusMedisPage';
import RiwayatPasien from './pages/Dokter/RiwayatPasien';
import EditProfilePage from './pages/Dokter/EditProfilePage';

// Perawat Layout & Pages
import DashboardLayoutPerawat from './layouts/DashboardLayoutPerawat';
import DashboardPerawat from './pages/Perawat/DashboardPerawat';
import PasienDirawat from './pages/Perawat/PasienDirawat';
import ScanQRBed from './pages/Perawat/ScanQRBed';


export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Dokter Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="patient" element={<Patient />} />
          <Route path="sensor/:patientId" element={<StatusMedisPage />} />
          <Route path="history" element={<RiwayatPasien />} />
          <Route path="edit-profile" element={<EditProfilePage />} />
        </Route>

        {/* Perawat Dashboard Routes */}
        <Route path="/dashboard/perawat" element={<DashboardLayoutPerawat />}>
          <Route index element={<DashboardPerawat />} />
          <Route path="/dashboard/perawat/pasien" element={<PasienDirawat />} />
          <Route path="/dashboard/perawat/scanqr" element={<ScanQRBed />} />

        </Route>
      </Routes>
    </Router>
  );
}
