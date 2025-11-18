import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error loading users:', err));
  }, []);

  const checkUser = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      const nameFromEmail = (addr) => {
        const part = (addr || '').split('@')[0] || addr;
        return part.charAt(0).toUpperCase() + part.slice(1);
      };

      const userObj = { email: foundUser.email, name: nameFromEmail(foundUser.email) };
      // persist logged-in user locally so Navbar can read it
      localStorage.setItem('user', JSON.stringify(userObj));

      alert('✅ Login successful! Redirecting...');
      navigate('/');
    } else {
      alert('❌ Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
      <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl" />
      <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl" />

      <div className="relative z-10 w-full max-w-md bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-700/60 p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400">Sign in to your ZestyBite account</p>
        </div>

        <form className="space-y-6" onSubmit={checkUser}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              className="w-full bg-gray-700/50 text-gray-200 border border-gray-600 rounded-xl p-3 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition ease-in-out duration-200"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              placeholder="Enter your password"
              className="w-full bg-gray-700/50 text-gray-200 border border-gray-600 rounded-xl p-3 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition ease-in-out duration-200"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-300 cursor-pointer">
              <input className="mr-2 h-4 w-4 text-amber-500 focus:ring-amber-500 border-gray-600 rounded" id="remember-me" type="checkbox" />
              Remember me
            </label>
            <a className="text-sm text-amber-500 hover:text-amber-400 transition-colors" href="#">
              Forgot password?
            </a>
          </div>

          <button
            className="w-full bg-linear-to-r from-amber-500 to-amber-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:from-amber-600 hover:to-amber-700 transition ease-in-out duration-200 cursor-pointer"
            type="submit"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Don't have an account?{' '}
            <a className="text-amber-500 hover:text-amber-400 font-semibold transition-colors" href="/signup">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
