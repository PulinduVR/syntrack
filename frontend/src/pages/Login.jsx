import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(username, password)) {
            navigate('/dashboard'); 
        } else {
            alert('Invalid credentials');
        }
    }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <div className="flex justify-center mb-4">
          <div>
            <img src='assets/syntech.png' alt = 'Syntech Logo' />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-2">Bus Regulatory System</h2>
        <p className="text-gray-500 text-center mb-6">Enter your credentials to access the dashboard</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between text-sm mb-4">
            <span></span>
            <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition">
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login