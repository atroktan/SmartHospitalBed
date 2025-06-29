import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import doctorImage from '../assets/dokterlogin.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Ambil semua user dari localStorage
    const allUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Cari user yang cocok dengan email dan password
    const matchedUser = allUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (!matchedUser) {
      alert('Email atau password salah.');
      return;
    }

    // Simpan session login
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));

    alert(`Login berhasil sebagai ${matchedUser.role}`);

    // Redirect sesuai role
    if (matchedUser.role === 'dokter') {
      navigate('/dashboard/dokter');
    } else if (matchedUser.role === 'perawat') {
      navigate('/dashboard/perawat');
    } else if (matchedUser.role === 'teknisi') {
      navigate('/dashboard/teknisi');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl flex overflow-hidden">
          {/* Left Section - Image */}
          <div className="hidden md:flex md:w-1/2 bg-blue-600 items-center justify-center p-6 text-white">
            <img
              src={doctorImage}
              alt="Doctor Illustration"
              className="max-w-xs w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Right Section - Login Form */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">Login</h2>
            <p className="text-gray-600 mb-6">Welcome back, you've been missed!</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm p-3 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Your password"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm p-3 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="text-right">
                <Link to="/forgot-password" className="text-blue-600 hover:underline text-sm font-medium">
                  Forgot your password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Login
              </button>

              <div className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-600 hover:underline">
                  Create one
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
