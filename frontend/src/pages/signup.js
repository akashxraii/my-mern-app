import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';

function SignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    try {
      const { name, email, password } = form;
      const res = await axios.post('http://192.168.1.14:5000/api/auth/register', {
        name,
        email,
        password,
      });
      setMessage(res.data.message);
      setForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    // ...existing code...
    } catch (err) {
      setMessage(
        err.response?.data?.error || err.message || 'Registration failed'
      );
    }}
// ...existing code...

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-left">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn">
              Sign Up
            </button>
            {message && (
              <div style={{ marginTop: '1rem', color: message.includes('success') ? 'green' : 'red' }}>
                {message}
              </div>
            )}
          </form>
        </div>
        <div className="signup-right">
          <p>
            Already have an account? <a href="/login">Log in</a>
          </p>
          <div className="or-divider">Or</div>
          <button className="google-btn">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
            Sign up with Google
          </button>
          <button className="facebook-btn">
            <img src="https://img.icons8.com/ios-filled/16/ffffff/facebook-new.png" alt="Facebook" />
            Sign up with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;