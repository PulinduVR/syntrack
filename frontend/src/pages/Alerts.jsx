import React, {useState} from 'react'
import SideBar from '../components/SideBar';
import Card from '../components/Card';
import { Bus, Map, AlertCircle, TrendingUp, AlertTriangle, TrafficCone, CloudAlert, Users, AlertOctagon, Info, X } from 'lucide-react'
import LiveBusTracking from '../components/LiveBusTracking';

const Alerts = () => {

  const [selectedAlert, setSelectedAlert] = useState(null);
  const [activeTab, setActiveTab] = useState("All Alerts");


  const alerts = [
    {
      id: 1,
      type: "Bus Speeding Alert",
      priority: "high",
      description: "Bus KA-1234 (Route 138) is traveling at 85 km/h in a 60 km/h zone",
      time: "5 minutes ago",
      location: "Galle Road, Colombo",
      route: "KA-1234 (Route 138)",
      icon: <AlertCircle className="text-red-500" />,
      details: {
        alertType: "Speeding",
        status: "Active",
        timeReported: "Apr 23, 10:24 PM",
        location: "Galle Road, Colombo",
        busId: "KA-1234",
        routeNumber: "138",
        currentSpeed: "85 km/h",
        speedLimit: "60 km/h",
        driver: "Samantha Perera"
      }
    },
    {
      id: 2,
      type: "Bus Overcrowding Alert",
      priority: "medium",
      description: "Bus WP-5678 (Route 17) is operating at 135% capacity",
      time: "15 minutes ago",
      location: "Kandy Road, Kadawatha",
      route: "WP-5678 (Route 17)",
      icon: <Users className="text-yellow-500" />,
      details: {
        alertType: "Overcrowding",
        status: "Active",
        timeReported: "Apr 23, 10:14 PM",
        location: "Kandy Road, Kadawatha",
        busId: "WP-5678",
        routeNumber: "17",
        currentCapacity: "135%",
        maxCapacity: "45 passengers",
        driver: "Anil Fernando"
      }
    },
    {
      id: 3,
      type: "Route Deviation Alert",
      priority: "low",
      description: "Bus CP-9012 (Route 154) has deviated from its assigned route",
      time: "30 minutes ago",
      location: "Peradeniya Road, Kandy",
      route: "CP-9012 (Route 154)",
      icon: <Map className="text-blue-500" />,
      details: {
        alertType: "Route Deviation",
        status: "Active",
        timeReported: "Apr 23, 9:59 PM",
        location: "Peradeniya Road, Kandy",
        busId: "CP-9012",
        routeNumber: "154",
        deviation: "2.5 km from assigned route",
        driver: "Malik Jayasuriya"
      }
    },
    {
      id: 4,
      type: "Heavy Traffic Alert",
      priority: "medium",
      description: "Heavy traffic reported on Galle Road affecting multiple bus routes",
      time: "45 minutes ago",
      location: "Galle Road, Wellawatte",
      route: "Multiple routes affected",
      icon: <AlertTriangle className="text-orange-500" />,
      details: {
        alertType: "Heavy Traffic",
        status: "Active",
        timeReported: "Apr 23, 9:44 PM",
        location: "Galle Road, Wellawatte",
        affectedRoutes: "138, 100, 101, 154",
        estimatedDelay: "25-30 minutes",
        cause: "Road construction"
      }
    },
    {
      id: 5,
      type: "Incident Alert",
      priority: "high",
      description: "Bus breakdown reported for SL-7890 (Route 245)",
      time: "1 hour ago",
      location: "High Level Road, Nugegoda",
      route: "SL-7890 (Route 245)",
      icon: <AlertOctagon className="text-red-500" />,
      details: {
        alertType: "Breakdown",
        status: "Active",
        timeReported: "Apr 23, 9:29 PM",
        location: "High Level Road, Nugegoda",
        busId: "SL-7890",
        routeNumber: "245",
        incidentType: "Engine failure",
        driver: "Kapila Mendis",
        estimatedResolution: "2 hours"
      }
    },
    {
      id: 6,
      type: "Weather Alert",
      priority: "medium",
      description: "Heavy rain affecting bus operations in Colombo district",
      time: "2 hours ago",
      location: "Colombo District",
      route: "All routes in the area",
      icon: <Info className="text-blue-500" />,
      details: {
        alertType: "Weather",
        status: "Active",
        timeReported: "Apr 23, 8:29 PM",
        location: "Colombo District",
        weatherCondition: "Heavy rain",
        affectedAreas: "Colombo, Dehiwala, Mount Lavinia",
        estimatedDuration: "3-4 hours",
        advisories: "Expect delays of 15-20 minutes on all routes"
      }
    }
  ];

  const tabs = ["All Alerts", "Active", "Resolved", "High Priority"];

  const filteredAlerts = alerts.filter(alert => {
    if (activeTab === "All Alerts") return true;
    if (activeTab === "Active") return alert.details.status === "Active";
    if (activeTab === "Resolved") return alert.details.status === "Resolved";
    if (activeTab === "High Priority") return alert.priority === "high";
    return true;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high": return "bg-red-500";
      case "medium": return "bg-gray-800";
      case "low": return "bg-gray-400";
      default: return "bg-gray-500";
    }
  };

  const getIconByAlertType = (type) => {
    if (type.includes("Bus Speeding")) return <AlertCircle className="text-red-500" size={24} />;
    if (type.includes("Overcrowding")) return <Users className="text-yellow-500" size={24} />;
    if (type.includes("Route Deviation")) return <Map className="text-blue-500" size={24} />;
    if (type.includes("Traffic")) return <AlertTriangle className="text-orange-500" size={24} />;
    if (type.includes("Incident")) return <AlertOctagon className="text-red-500" size={24} />;
    if (type.includes("Weather")) return <Info className="text-blue-500" size={24} />;
    return <AlertCircle className="text-gray-500" size={24} />;
  };

  const handleShowDetails = (alert) => {
    setSelectedAlert(alert);
  };

  const handleCloseDetails = () => {
    setSelectedAlert(null);
  };

  const handleResolve = (e, alertId) => {
    e.stopPropagation();
  };

  return (
    <div className='flex'>
      <SideBar />
      <main className="ml-64 p-6 w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Alerts</h1>
          <p className="text-sm text-gray-500">Monitor and manage alerts across the bus network.</p>
        </div>
        <div className="flex space-x-2">
          <button className="border rounded-lg px-3 py-1 text-sm">Refresh</button>
          <button className="bg-black text-white rounded-lg px-3 py-1 text-sm flex items-center">
            <AlertCircle className="mr-1" size={16} /> Filter
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card title="Bus Alerts" value="5" icon={<Bus size={24} />} changeText="Speeding, Overcrowding and Route deviations" changeType="blue" showIcon={false} />
        <Card title="Traffic Alerts" value="38" icon={<TrafficCone size={24} />} changeText="Traffic alerts, road closures" changeType="blue" showIcon={false} />
        <Card title="Incident Alerts" value="7" icon={<AlertTriangle size={24} />} changeText="Accidents, Breakdowns" changeType="blue" showIcon={false} />
        <Card title="Weather Alerts" value="4" icon={<CloudAlert size={24} />} changeText="Adverse weather conditions" changeType="blue" showIcon={false} />
      </div>
      <div className=" mt-10 bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Alert Management</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search alerts..."
            className="pl-10 pr-4 py-2 border rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute left-3 top-3 h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="flex mb-6 bg-gray-100 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-3 text-center font-medium rounded-lg ${
              activeTab === tab
                ? "bg-white shadow-sm"
                : "text-gray-500 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredAlerts.map((alert) => (
          <div
            key={alert.id}
            className="bg-white border-gray-500 rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-start">
              <div className="h-12 w-12 flex items-center justify-center bg-red-50 rounded-full mr-4">
                {alert.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <h3 className="font-bold text-lg mr-2">{alert.type}</h3>
                  <span className={`text-xs text-white px-2 py-1 rounded ${getPriorityColor(alert.priority)}`}>
                    {alert.priority}
                  </span>
                </div>
                <p className="text-gray-700 mb-2">{alert.description}</p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span className="flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {alert.time}
                  </span>
                  
                  <span className="flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {alert.location}
                  </span>
                  
                  <span className="flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                    {alert.route}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleShowDetails(alert)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Details
                </button>
                <button
                  onClick={(e) => handleResolve(e, alert.id)}
                  className="px-4 py-2 border border-green-500 rounded-lg text-green-500 hover:bg-green-50 flex items-center"
                >
                  <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Resolve
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedAlert && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
            <div className="flex items-center p-4 border-b">
              <div className="mr-3">
                {getIconByAlertType(selectedAlert.type)}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold flex items-center">
                  {selectedAlert.type}
                  <span className={`ml-2 text-xs text-white px-2 py-1 rounded ${getPriorityColor(selectedAlert.priority)}`}>
                    {selectedAlert.priority}
                  </span>
                </h2>
                <p className="text-gray-600">{selectedAlert.description}</p>
              </div>
              <button 
                onClick={handleCloseDetails} 
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Alert Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Alert Type:</span>
                    <span className="font-medium">{selectedAlert.details.alertType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status:</span>
                    <span className="font-medium">{selectedAlert.details.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Time Reported:</span>
                    <span className="font-medium">{selectedAlert.details.timeReported}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Location:</span>
                    <span className="font-medium">{selectedAlert.details.location}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Details</h3>
                <div className="space-y-2">
                  {selectedAlert.details.busId && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Bus ID:</span>
                      <span className="font-medium">{selectedAlert.details.busId}</span>
                    </div>
                  )}
                  {selectedAlert.details.routeNumber && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Route Number:</span>
                      <span className="font-medium">{selectedAlert.details.routeNumber}</span>
                    </div>
                  )}
                  {selectedAlert.details.currentSpeed && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Current Speed:</span>
                      <span className="font-medium text-red-500">{selectedAlert.details.currentSpeed}</span>
                    </div>
                  )}
                  {selectedAlert.details.speedLimit && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Speed Limit:</span>
                      <span className="font-medium">{selectedAlert.details.speedLimit}</span>
                    </div>
                  )}
                  {selectedAlert.details.currentCapacity && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Current Capacity:</span>
                      <span className="font-medium text-red-500">{selectedAlert.details.currentCapacity}</span>
                    </div>
                  )}
                  {selectedAlert.details.maxCapacity && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Max Capacity:</span>
                      <span className="font-medium">{selectedAlert.details.maxCapacity}</span>
                    </div>
                  )}
                  {selectedAlert.details.deviation && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Deviation:</span>
                      <span className="font-medium">{selectedAlert.details.deviation}</span>
                    </div>
                  )}
                  {selectedAlert.details.affectedRoutes && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Affected Routes:</span>
                      <span className="font-medium">{selectedAlert.details.affectedRoutes}</span>
                    </div>
                  )}
                  {selectedAlert.details.driver && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Driver:</span>
                      <span className="font-medium">{selectedAlert.details.driver}</span>
                    </div>
                  )}
                  {selectedAlert.details.estimatedDelay && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Estimated Delay:</span>
                      <span className="font-medium">{selectedAlert.details.estimatedDelay}</span>
                    </div>
                  )}
                  {selectedAlert.details.incidentType && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Incident Type:</span>
                      <span className="font-medium">{selectedAlert.details.incidentType}</span>
                    </div>
                  )}
                  {selectedAlert.details.weatherCondition && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Weather Condition:</span>
                      <span className="font-medium">{selectedAlert.details.weatherCondition}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex justify-end p-4 border-t bg-gray-50">
              <button
                onClick={handleCloseDetails}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 mr-2"
              >
                Close
              </button>
              <button
                onClick={(e) => {
                  handleResolve(e, selectedAlert.id);
                  handleCloseDetails();
                }}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center"
              >
                <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Mark as Resolved
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
      </main>
    </div>
  )
}

export default Alerts