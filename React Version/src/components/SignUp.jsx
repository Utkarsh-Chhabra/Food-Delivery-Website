import React, { useState, useEffect } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Load users from local JSON server (if available) to check duplicates
        fetch('http://localhost:3000/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => {
                console.error('Error loading users:', err);
                setUsers([]);
            });
    }, []);

    const handleSignUp = async (e) => {
        e.preventDefault();

        // Basic validations
        if (!email || !password || !confirmPassword) {
            alert('Please fill all fields');
            return;
        }

        if (password.length < 6) {
            alert('Password should be at least 6 characters');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const emailExists = users.some((u) => u.email === email);
        if (emailExists) {
            alert('An account with this email already exists');
            return;
        }

        setLoading(true);

        try {
            // POST new user to JSON server
            const res = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) throw new Error('Failed to create user');

            const newUser = await res.json();

            // Optionally update local users state
            setUsers((prev) => [...prev, newUser]);

            alert('✅ Account created successfully! You can now login.');
            // Redirect to login page (adjust route if your app uses a router)
            window.location.href = '/login';
        } catch (err) {
            console.error('Signup error:', err);
            alert('❌ Could not create account. Make sure JSON server is running at http://localhost:3000');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
            <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl" />
            <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl" />

            <div className="relative z-10 w-full max-w-md bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-700/60 p-8">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
                    <p className="text-gray-400">Join ZestyBite and start your culinary journey</p>
                </div>

                <form className="space-y-6" onSubmit={handleSignUp}>
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
                            placeholder="Create a password (min 6 chars)"
                            className="w-full bg-gray-700/50 text-gray-200 border border-gray-600 rounded-xl p-3 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition ease-in-out duration-200"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            placeholder="Confirm your password"
                            className="w-full bg-gray-700/50 text-gray-200 border border-gray-600 rounded-xl p-3 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition ease-in-out duration-200"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        className="w-full bg-linear-to-r from-amber-500 to-amber-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:from-amber-600 hover:to-amber-700 transition ease-in-out duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-400">
                        Already have an account?{' '}
                        <a className="text-amber-500 hover:text-amber-400 font-semibold transition-colors" href="/login">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
