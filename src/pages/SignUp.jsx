import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import doctorImage from '../assets/doktersignup.png';
import Header from '../components/Header';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nipSip: '',
    gender: '',
    birthPlace: '',
    birthDate: '',
    institution: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    role: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(formData.password)) {
      alert('Password must be at least 6 characters and include both letters and numbers.');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const emailUsed = existingUsers.find(user => user.email === formData.email);
    if (emailUsed) {
      alert('Email already registered.');
      return;
    }

    const newUser = {
      ...formData,
      name: `${formData.firstName} ${formData.lastName}`,
    };

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    alert(`Akun berhasil dibuat sebagai ${formData.role}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-col lg:flex-row justify-center items-center py-6 px-4 lg:px-12 gap-4">
        <div className="w-full lg:w-1/2 max-w-md">
          <img src={doctorImage} alt="Doctor" className="w-full rounded-md shadow-md object-cover" />
        </div>

        <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up For Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>
    <label htmlFor="firstName">First Name</label>
    <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
  </div>
  <div>
    <label htmlFor="lastName">Last Name</label>
    <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>
    <label htmlFor="nip">NIP</label>
    <input id="nip" name="nip" value={formData.nip} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
  </div>
  <div>
    <label htmlFor="sip">SIP</label>
    <input id="sip" name="sip" value={formData.sip} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
  </div>
</div>


            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="gender">Jenis Kelamin</label>
                <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full px-3 py-2 border rounded" required>
                  <option value="">-- Pilih --</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
              <div>
                <label htmlFor="birthPlace">Tempat Lahir</label>
                <input id="birthPlace" name="birthPlace" value={formData.birthPlace} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
              </div>
            </div>

            <div>
              <label htmlFor="birthDate">Tanggal Lahir</label>
              <input type="date" id="birthDate" name="birthDate" value={formData.birthDate} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
            </div>

            <div>
              <label htmlFor="institution">Instansi / Rumah Sakit Asal</label>
              <input id="institution" name="institution" value={formData.institution} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
            </div>

            <div>
              <label htmlFor="role">Choose Role</label>
              <select id="role" name="role" value={formData.role} onChange={handleChange} className="w-full px-3 py-2 border rounded" required>
                <option value="">-- Select Role --</option>
                <option value="dokter">Dokter</option>
                <option value="perawat">Perawat</option>
                <option value="teknisi">Teknisi</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input id="confirmPassword" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="acceptTerms" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} className="mr-2" required />
              <label htmlFor="acceptTerms" className="text-sm text-gray-700">
                I accept <a href="#" className="text-blue-600">terms and conditions</a>
              </label>
            </div>

            <button type="submit" className="w-full bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">Sign Up</button>

            <p className="text-center text-sm text-gray-600 mt-2">
              Already have an account? <Link to="/signin" className="text-blue-600">Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
