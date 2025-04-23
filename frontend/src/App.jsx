import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './Auth';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import OwnerDashboard from './pages/OwnerDashboard';
import Alerts from './pages/Alerts';
import './App.css'

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
              <ProtectedRoute allowedRole="gov-official">
                <Dashboard /> 
              </ProtectedRoute>} />
            <Route path="/owner-dashboard" element={
                <ProtectedRoute allowedRole="bus_owner">
                  <OwnerDashboard />
                </ProtectedRoute>} />
            <Route path="/alerts" element={
                <ProtectedRoute allowedRole="gov-official">
                  <Alerts />
                </ProtectedRoute>} />
            <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
