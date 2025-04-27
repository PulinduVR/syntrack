import React, {useState} from 'react'
import { LineChart, BarChart, PieChart, Line, Bar, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import { Calendar, Filter, Download, Printer, AlertTriangle, Bus, Users, TrendingUp } from 'lucide-react';
import SideBar from '../components/Sidebar';

const Reports = () => {

    const [activeTab, setActiveTab] = useState('System Overview');
  
  // Revenue data for bar chart
  const revenueData = [
    { name: 'Jan', Revenue: 4.5, Expenses: 3.2, Profit: 1.3 },
    { name: 'Feb', Revenue: 5.2, Expenses: 3.5, Profit: 1.7 },
    { name: 'Mar', Revenue: 4.8, Expenses: 3.3, Profit: 1.5 },
    { name: 'Apr', Revenue: 5.5, Expenses: 3.6, Profit: 1.9 },
    { name: 'May', Revenue: 6.1, Expenses: 3.8, Profit: 2.3 },
    { name: 'Jun', Revenue: 5.8, Expenses: 3.7, Profit: 2.1 },
  ];
  
  // Passenger trend data for line chart
  const passengerData = [
    { week: 'Week 1', passengers: 280 },
    { week: 'Week 2', passengers: 310 },
    { week: 'Week 3', passengers: 290 },
    { week: 'Week 4', passengers: 320 },
    { week: 'Week 5', passengers: 345 },
    { week: 'Week 6', passengers: 335 },
    { week: 'Week 8', passengers: 365 },
  ];
  
  // Incident distribution data for pie chart
  const incidentData = [
    { name: 'Speeding', value: 35, color: '#ff6b6b' },
    { name: 'Overloading', value: 25, color: '#ffa45c' },
    { name: 'Route Deviation', value: 15, color: '#74c0fc' },
    { name: 'Mechanical Issues', value: 10, color: '#845ef7' },
    { name: 'Other', value: 15, color: '#adb5bd' },
  ];
  
  // Regulatory actions data for table
  const regulatoryData = [
    { date: '2023-06-15', actionType: 'Speed Violation', operator: 'Sri Lanka Transport Board', busId: 'KA-1234', status: 'Resolved', fine: 'LKR 15,000' },
    { date: '2023-06-14', actionType: 'Overloading', operator: 'Southern Express Lines', busId: 'WP-5678', status: 'Pending', fine: 'LKR 25,000' },
    { date: '2023-06-12', actionType: 'Route Deviation', operator: 'Central Transport Co.', busId: 'CP-9012', status: 'Under Review', fine: 'LKR 10,000' },
    { date: '2023-06-10', actionType: 'Documentation', operator: 'Northern Travels', busId: 'NW-3456', status: 'Resolved', fine: 'LKR 5,000' },
    { date: '2023-06-08', actionType: 'Safety Violation', operator: 'Eastern Routes Ltd.', busId: 'EP-7890', status: 'Pending', fine: 'LKR 20,000' },
  ];

  // Tabs data
  const tabs = ['System Overview', 'Compliance', 'Regional Analysis', 'Operators'];
  return (
    <div className='flex'>
        <SideBar />
        <main className="ml-64 p-6 w-full">
        <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Reports & Analytics</h1>
            <p className="text-gray-600">Comprehensive insights into the public transportation system.</p>
          </div>
          <div className="flex space-x-2">
            <div className="flex items-center px-3 py-2 bg-white border rounded-md">
              <Calendar className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-gray-700">Last 30 Days</span>
              <span className="ml-2">▼</span>
            </div>
            <button className="flex items-center px-3 py-2 bg-white border rounded-md">
              <Filter className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-gray-700">Filters</span>
            </button>
            <button className="flex items-center px-3 py-2 bg-white border rounded-md">
              <Download className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-gray-700">Export</span>
            </button>
            <button className="flex items-center px-3 py-2 bg-black text-white rounded-md">
              <Printer className="w-5 h-5 mr-2" />
              <span>Print Report</span>
            </button>
          </div>
        </div>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Total Buses */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between mb-2">
              <h3 className="font-medium text-gray-700">Total Buses Registered</h3>
              <Bus className="w-5 h-5 text-gray-500" />
            </div>
            <div className="text-3xl font-bold mb-1">1,450</div>
            <div className="flex items-center text-green-500">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span className="text-sm">+3.2% from last month</span>
            </div>
          </div>
          
          {/* Monthly Passengers */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between mb-2">
              <h3 className="font-medium text-gray-700">Monthly Passengers</h3>
              <Users className="w-5 h-5 text-gray-500" />
            </div>
            <div className="text-3xl font-bold mb-1">1.2M</div>
            <div className="flex items-center text-green-500">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span className="text-sm">+5.1% from last month</span>
            </div>
          </div>
          
          {/* Compliance Rate */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between mb-2">
              <h3 className="font-medium text-gray-700">Compliance Rate</h3>
              <TrendingUp className="w-5 h-5 text-gray-500" />
            </div>
            <div className="text-3xl font-bold mb-1">89%</div>
            <div className="flex items-center text-green-500">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span className="text-sm">+2.4% from last month</span>
            </div>
          </div>
          
          {/* Active Incidents */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between mb-2">
              <h3 className="font-medium text-gray-700">Active Incidents</h3>
              <AlertTriangle className="w-5 h-5 text-gray-500" />
            </div>
            <div className="text-3xl font-bold mb-1">24</div>
            <div className="flex items-center text-red-500">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span className="text-sm">+8 from last week</span>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 text-sm font-medium ${activeTab === tab ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        {/* System Revenue Overview */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-1">System Revenue Overview</h2>
          <p className="text-gray-600 mb-6">Monthly revenue, expenses, and profit across the transportation system</p>
          <div className="h-64">
            <BarChart
              width={1000}
              height={250}
              data={revenueData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Revenue" fill="#4dabf7" />
              <Bar dataKey="Expenses" fill="#ff8787" />
              <Bar dataKey="Profit" fill="#69db7c" />
            </BarChart>
          </div>
        </div>
        
        {/* Passenger Trends and Incident Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Passenger Trends */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-1">Passenger Trends</h2>
            <p className="text-gray-600 mb-6">Weekly passenger count trends</p>
            <div className="h-64">
              <LineChart
                width={450}
                height={250}
                data={passengerData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="passengers" 
                  stroke="#4285f4" 
                  activeDot={{ r: 8 }}
                  dot={{ stroke: '#4285f4', strokeWidth: 2, r: 4, fill: '#fff' }}
                />
              </LineChart>
            </div>
          </div>
          
          {/* Incident Distribution */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-1">Incident Distribution</h2>
            <p className="text-gray-600 mb-6">Breakdown of incidents by type</p>
            <div className="h-64 flex justify-center">
              <PieChart width={400} height={250}>
                <Pie
                  data={incidentData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {incidentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>
        </div>
        
        {/* Recent Regulatory Actions */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-1">Recent Regulatory Actions</h2>
          <p className="text-gray-600 mb-6">Latest enforcement actions taken by regulatory authorities</p>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Date</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Action Type</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Operator</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Bus ID</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Status</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Fine Amount</th>
                </tr>
              </thead>
              <tbody>
                {regulatoryData.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4 text-sm text-gray-500">{item.date}</td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-700">{item.actionType}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{item.operator}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{item.busId}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        item.status === 'Resolved' 
                          ? 'bg-gray-100 text-gray-800' 
                          : item.status === 'Pending' 
                            ? 'bg-black text-white' 
                            : 'bg-gray-200 text-gray-700'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-700">{item.fine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
        </main>
    </div>
  )
}

export default Reports