import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
require('dotenv').config();

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Bersihkan error sebelumnya
  
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (res.ok) {
        router.push('/dashboard'); // Redirect ke dashboard jika berhasil
      } else if (res.status === 401) {
        setError('Invalid username or password'); // Tangani kesalahan login
      } else {
        const data = await res.json();
        setError(data.message || 'Something went wrong');
      }
    } catch (error) {
      setError('Network error or server is unreachable');
      console.error('Error during login:', error);
    }
  };
  

    return (
        <div className="container_login">
            <section className="login_image">
                <img src="/assets/Login.jpg" alt="" />
            </section>
            
            <section className="login_form">
                <h1>Welcome to Teknomadya Dashboard</h1>
                <p>Login to access dashboard</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Masukkan username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Masukkan password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button>Login</button>
                </form>
            </section>
        </div>
    );
};