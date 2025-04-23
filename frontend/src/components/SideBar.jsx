import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth';
import {
  Bell,
  Search,
  LogOut,
  Settings,
  User,
  Home,
  Map,
  Clock,
  FileText,
  AlertTriangle,
  Bus,
  Users,
  Star,
  Route,
} from "lucide-react"

const SideBar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="w-64 h-full bg-gray-900 text-white fixed p-5 space-y-6">
      <h2 className="text-2xl font-bold">BusMonitor</h2>
      <nav className="space-y-2">
        <div className='mb-10'>
          <h3 className="text-sm text-gray-500 mb-5">Main</h3>
          <a href="/dashboard" className="flex items-center gap-2 mb-2">
            <Home className="h-5 w-5" />
            <span>Dashboard</span>
          </a>
          <a href="/alerts" className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5" />
            <span>Alerts</span>
          </a>
          <a href="/live-tracking" className="flex items-center gap-2 mb-2">
            <Map className="h-5 w-5" />
            <span>Live Tracking</span>
          </a>
          <a href="/routes" className="flex items-center gap-2 mb-2">
            <Route className="h-5 w-5" />
            <span>Bus Routes</span>
          </a>
        </div>

        <div className='mb-10'>
          <h3 className="text-sm text-gray-500 mb-5">Users</h3>
          <a href="/bus-owners" className="flex items-center gap-2 mb-2">
            <User className="h-5 w-5" />
            <span>Bus Owners</span>
          </a>
          <a href="/busses" className="flex items-center gap-2 mb-2">
            <Bus className="h-5 w-5" />
            <span>Busses</span>
          </a>
          <a href="/drivers-conductors" className="flex items-center gap-2 mb-2">
            <Users className="h-5 w-5" />
            <span>Drivers & Conductors</span>
          </a>
        </div>

        <div className='mb-10'>
          <h3 className="text-sm text-gray-500 mb-5">Management</h3>
          <a href="/schedule" className="flex items-center gap-2 mb-2">
            <Clock className="h-5 w-5" />
            <span>Bus Schedules</span>
          </a>
          <a href="/reports" className="flex items-center gap-2 mb-2">
            <FileText className="h-5 w-5" />
            <span>Reports</span>
          </a>
          <a href="/ratings" className="flex items-center gap-2 mb-2">
            <Star className="h-5 w-5" />
            <span>Ratings & Inquiries</span>
          </a>
        </div>

        {/* New section for account and logout */}
        <div className='pt-5 border-t border-gray-700'>
          <a href="/account" className="flex items-center gap-2 mb-2">
            <Settings className="h-5 w-5" />
            <span>My Account</span>
          </a>
          <button onClick={handleLogout} className="flex items-center gap-2 text-red-400 hover:text-red-600">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default SideBar
