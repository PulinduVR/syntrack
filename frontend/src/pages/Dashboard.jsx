import React from 'react'
import SideBar from '../components/Sidebar.jsx';
import Card from '../components/Card.jsx';
import LiveBusTracking from '../components/LiveBusTracking.jsx'
import { Bus, MapPin, AlertCircle, TrendingUp } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className="flex">
      <SideBar />
      <main className="ml-64 p-6 w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-sm text-gray-500">Monitor and manage bus operations across the network.</p>
        </div>
        <div className="flex space-x-2">
          <button className="border rounded-lg px-3 py-1 text-sm">Today</button>
          <button className="bg-black text-white rounded-lg px-3 py-1 text-sm flex items-center">
            <AlertCircle className="mr-1" size={16} /> View Alerts
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card title="Active Buses" value="142" icon={<Bus size={24} />} changeText="+5% from yesterday" changeType="up" />
        <Card title="Active Routes" value="38" icon={<MapPin size={24} />} changeText="All routes operational" changeType="up" />
        <Card title="Active Alerts" value="7" icon={<AlertCircle size={24} />} changeText="+3 from yesterday" changeType="danger" />
        <Card title="On-Time Rate" value="78%" icon={<TrendingUp size={24} />} changeText="-2% from yesterday" changeType="down" />
      </div>

      <div className="mt-6">
        <div className="flex space-x-4 border-b mb-4">
          <button className="text-sm border-b-2 border-black pb-2 font-semibold">Live Map</button>
          <button className="text-sm text-gray-500 pb-2">Recent Alerts</button>
          <button className="text-sm text-gray-500 pb-2">Performance</button>
        </div>

        <LiveBusTracking />
      </div>
      </main>
    </div>
  )
}

export default Dashboard