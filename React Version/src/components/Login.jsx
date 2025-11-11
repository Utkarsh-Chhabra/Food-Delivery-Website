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
    <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>
        <form className="flex flex-col" onSubmit={checkUser}>
          <input
            placeholder="Email address"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-amber-500 transition ease-in-out duration-150"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-amber-500 transition ease-in-out duration-150"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center justify-between flex-wrap">
            <label className="text-sm text-gray-200 cursor-pointer" htmlFor="remember-me">
              <input className="mr-2" id="remember-me" type="checkbox" />
              Remember me
            </label>
            <a className="text-sm text-amber-500 hover:underline mb-0.5" href="#">
              Forgot password?
            </a>
            <p className="text-white mt-4">
              Don't have an account?{' '}
              <a className="text-sm text-amber-500 hover:underline mt-4" href="/signup">
                Signup
              </a>
            </p>
          </div>
          <button
            className="bg-linear-to-r from-yellow-500 to-amber-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-amber-600 hover:to-amber-600 transition ease-in-out duration-150 cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
