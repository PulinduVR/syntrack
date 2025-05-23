import React from 'react'
import {NavLink} from 'react-router-dom'
import {
    LogOut,
    Settings,
    User,
    Home,
    Map,
    Clock,
    FileText,
    DollarSign,
    Bus,
    Users,
    Star,
    Route,
  } from "lucide-react";
  import { useAuth } from '../Auth';
  import { useNavigate } from 'react-router-dom';

const Owner_SideBar = () => {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <div className="w-64 h-full bg-gray-900 text-white fixed p-5 space-y-6">
    {/* <h2 className="text-2xl font-bold">BusMonitor</h2> */}
    <div>
        <img src='assets/syntech.png' alt = 'Syntech Logo' />
    </div>
    <nav className="space-y-2">
        <div className='mb-10'>
            <h3 className="text-sm text-gray-500 mb-5">Main</h3>
            <a href="/owner-dashboard" className="flex items-center gap-2 mb-2">
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
            </a>
            <a href="/my-buses" className="flex items-center gap-2 mb-2">
                <Map className="h-5 w-5" />
                <span>My Buses Live</span>
            </a>
            <a href="/my-routes" className="flex items-center gap-2 mb-2">
                <Route className="h-5 w-5" />
                <span>Routes</span>
            </a>
        </div>
        <div className='mb-10'>
            <h3 className="text-sm text-gray-500 mb-5">Management</h3>
            <a href="/my-buses" className="flex items-center gap-2 mb-2">
                <Bus className="h-5 w-5" />
                <span>My Buses</span>
            </a>
            <a href="/my-staff" className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5" />
                <span>My Staff</span>
            </a>
            <a href="/my-schedules" className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5" />
                <span>Schedules</span>
            </a>
        </div>
        <div className='mb-5'>
            <h3 className="text-sm text-gray-500 mb-5">Business</h3>
            <a href="/schedule" className="flex items-center gap-2 mb-2">
                <DollarSign className="h-5 w-5" />
                <span>Earnings</span>
            </a>
            <a href="/my-reports" className="flex items-center gap-2 mb-2">
                <FileText className="h-5 w-5" />
                <span>Reports</span>
            </a>
            <a href="/my-ratings" className="flex items-center gap-2 mb-2">
                <Star className="h-5 w-5" />
                <span>Ratings & Feedback</span>
            </a>
        </div>
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

export default Owner_SideBar