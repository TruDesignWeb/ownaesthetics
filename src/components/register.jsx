"use client";
import { useState } from 'react';
import axios from 'axios';
export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/register', {
        email,
        password,
      });
      setMsg(res.data.message);
      setEmail('');
      setPassword('');
    } catch (err) {
      setMsg(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="[background:#f7f7f7] [padding:1.5rem_1rem] [text-align:center] [border-radius:12px] [max-width:600px] [margin:2rem_auto] [box-shadow:0_8px_20px_rgba(0,_0,_0,_0.05)]">
      <h2 className="[font-size:1.8rem] [margin-bottom:0.5rem] [color:#222]">Create an Account</h2>
      <form className="[display:flex] [flex-direction:column] [gap:1rem] [align-items:center]" onSubmit={handleRegister}>
        <input
          className="[padding:0.75rem_1rem] [border:1px_solid_#ccc] [border-radius:8px] [font-size:1rem] [width:100%] [max-width:300px]"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="[padding:0.75rem_1rem] [border:1px_solid_#ccc] [border-radius:8px] [font-size:1rem] [width:100%] [max-width:300px]"
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
        />

        <button type="submit">Register</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
