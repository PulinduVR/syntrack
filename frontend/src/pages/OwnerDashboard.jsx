import React from "react";
import Card from "../components/Card";
//import { Button } from "@/components/ui/button";
import { Bell, CalendarDays, BusFront } from "lucide-react";
import Owner_SideBar from "../components/Owner_SideBar";
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {

  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);

  return (
    <div className="flex">
      <Owner_SideBar />
    <main className="ml-64 p-6 w-full">
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome, {decoded.name}</h1>
          <p className="text-sm text-gray-500">
            You've been with us for 3 years, 1 month. Here's an overview of your bus operations.
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <button variant="outline" className="flex items-center gap-2">
            <CalendarDays size={16} /> Today
          </button>
          <button className="bg-black text-white flex items-center gap-2">
            <BusFront size={16} /> Add New Bus
          </button>
          <div className="relative">
            <Bell size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">2</span>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="My Buses" value="5" changeText="4 active, 1 in maintenance" changeType="down" icon={<BusFront size={24} />} />
        
        <Card title="Total Earnings" value="LKR 2,450,000.00" changeText="Since 3/15/2022" changeType="up" icon={<BusFront size={24} />} />
          
        <Card title="Today's Earnings" value="LKR 45,000.00" changeText="+12% from yesterday" changeType="up" icon={<BusFront size={24} />} />
         
      </div>

      {/* Tabs */}
      <div>
        <div className="flex gap-4 border-b pb-2">
          <button className="text-black border-b-2 border-black pb-1">Live Tracking</button>
          <button className="text-gray-500">Earnings Breakdown</button>
          <button className="text-gray-500">Alerts</button>
        </div>

        <Card title="Real-time location of all your buses currently in operation." value="Live Bus Tracking" changeText="View on map" changeType="up" icon={<BusFront size={24} />} />
          
      </div>
    </div>
    </main>
    </div>
  );
};

export default Dashboard;
