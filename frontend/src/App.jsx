import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './Auth';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import OwnerDashboard from './pages/OwnerDashboard';
import Alerts from './pages/Alerts';
import BusOwners from './pages/BusOwners';
import BusList from './pages/BusList';
import StaffList from './pages/StaffList';
import StaffDetails from './components/StaffDetails';
import RoutesView from './pages/RoutesView';
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
            <Route path="/bus-owners" element={
                <ProtectedRoute allowedRole="gov-official">
                  <BusOwners />
                </ProtectedRoute>} />
            <Route path="/bus-list" element={
                <ProtectedRoute allowedRole="gov-official">
                  <BusList />
                </ProtectedRoute>} />
            <Route path="/staff" element={
                <ProtectedRoute allowedRole="gov-official">
                  <StaffList />
                </ProtectedRoute>} />
            <Route path="/staff/:id" element={
                <ProtectedRoute allowedRole="gov-official">
                  <StaffDetails />
                </ProtectedRoute>} />
            <Route path="/routes" element={
                <ProtectedRoute allowedRole="gov-official">
                  <RoutesView />
                </ProtectedRoute>} />
            <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
