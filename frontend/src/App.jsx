import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './Auth';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css'

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard /> 
              </ProtectedRoute>} />
            <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
