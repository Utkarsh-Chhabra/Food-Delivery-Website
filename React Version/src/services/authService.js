const BASE = 'http://localhost:3000';

export async function loginUser(email, password) {
    // For json-server, we fetch users and match. Replace with proper /login on real API.
    const res = await fetch(`${BASE}/users`);
    if (!res.ok) throw new Error('Failed to fetch users');
    const users = await res.json();
    const found = users.find((u) => u.email === email && u.password === password);
    return found || null;
}

export async function signupUser(email, password) {
    // Creates a user record. Real APIs should hash passwords server-side.
    const res = await fetch(`${BASE}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error('Failed to create user');
    const user = await res.json();
    return user;
}

export default { loginUser, signupUser };
