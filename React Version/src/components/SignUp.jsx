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
        <div className="flex flex-col items-center justify-center h-screen dark">
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-200 mb-4">Sign Up</h2>
                <form className="flex flex-col" onSubmit={handleSignUp}>
                    <input
                        placeholder="Email address"
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-amber-500 transition ease-in-out duration-150"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Password (min 6 chars)"
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-amber-500 transition ease-in-out duration-150"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Confirm password"
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-amber-500 transition ease-in-out duration-150"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <div className="flex items-center justify-between flex-wrap">
                        <p className="text-white mt-4">
                            Already have an account?{' '}
                            <a className="text-sm text-amber-500 hover:underline mt-4" href="/login">
                                Login
                            </a>
                        </p>
                    </div>
                    <button
                        className="bg-linear-to-r from-yellow-500 to-amber-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-amber-600 hover:to-amber-600 transition ease-in-out duration-150 cursor-pointer"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Creating account...' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
