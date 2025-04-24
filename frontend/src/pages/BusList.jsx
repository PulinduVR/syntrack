import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';

const BusList = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("All Buses");
    const [searchQuery, setSearchQuery] = useState("");

    const buses = [
        {
          id: 'NB-1234',
          status: 'Active',
          model: 'Ashok Leyland Viking',
          type: 'AC',
          seats: 52,
          route: 'Colombo - Kandy',
          owner: 'Samantha Perera',
          image: '/placeholder',
          garageNumber: 'G-123',
          manufactured: '2018',
          registered: '2019',
          staff: {
            driver: {
              name: 'Ajith Kumara',
              rating: 4.5,
              license: 'DL-123456',
              renewalDate: 'May 15, 2024',
              phone: '+94 77 234 5678'
            },
            conductor: {
              name: 'Lalith Bandara',
              rating: 4.2,
              nic: '812345678V',
              phone: '+94 71 345 6789',
              age: 38
            }
          }
        },
        {
          id: 'WP-5678',
          status: 'Active',
          model: 'Tata Marcopolo',
          type: 'Non-AC',
          seats: 45,
          route: 'Colombo - Galle',
          owner: 'Samantha Perera',
          image: '/placeholder'
        },
        {
          id: 'SP-9012',
          status: 'Maintenance',
          model: 'Isuzu Journey-K',
          type: 'AC',
          seats: 48,
          route: 'Colombo - Jaffna',
          owner: 'Samantha Perera',
          image: '/placeholder'
        }
      ];

      const filteredBuses = buses.filter(bus => {
        if (activeTab === 'Active' && bus.status !== 'Active') return false;
        if (activeTab === 'Maintenance' && bus.status !== 'Maintenance') return false;
        if (activeTab === 'Inactive' && bus.status !== 'Inactive') return false;
    
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          return (
            bus.id.toLowerCase().includes(query) ||
            bus.model.toLowerCase().includes(query) ||
            bus.route.toLowerCase().includes(query) ||
            bus.owner.toLowerCase().includes(query)
          );
        }
    
        return true;
      });

      const handleViewDetails = (busId) => {
        navigate(`/bus/${busId}`);
      };

  return (
    <div className='flex'>
        <SideBar />
        <main className='ml-64 p-6 w-full'>
        <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold">Buses</h1>
          <p className="text-gray-600">Manage and monitor all registered buses in the system.</p>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md flex items-center">
          <span className="mr-2">+</span> Add Bus
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded-md ${activeTab === 'All Buses' ? 'bg-gray-200' : 'bg-gray-100'}`}
            onClick={() => setActiveTab('All Buses')}
          >
            All Buses
          </button>
          <button
            className={`px-4 py-2 rounded-md ${activeTab === 'Active' ? 'bg-gray-200' : 'bg-gray-100'}`}
            onClick={() => setActiveTab('Active')}
          >
            Active
          </button>
          <button
            className={`px-4 py-2 rounded-md ${activeTab === 'Maintenance' ? 'bg-gray-200' : 'bg-gray-100'}`}
            onClick={() => setActiveTab('Maintenance')}
          >
            Maintenance
          </button>
          <button
            className={`px-4 py-2 rounded-md ${activeTab === 'Inactive' ? 'bg-gray-200' : 'bg-gray-100'}`}
            onClick={() => setActiveTab('Inactive')}
          >
            Inactive
          </button>
        </div>
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search by plate number, model, route..."
            className="w-full px-4 py-2 border rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
            🔍
          </span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-2xl font-bold mb-2">Registered Buses</h2>
        <p className="text-gray-600 mb-6">A list of all buses registered in the system. Click on a bus to view more details.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBuses.map((bus) => (
            <div key={bus.id} className="border rounded-lg overflow-hidden bg-gray-50">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img src="/api/placeholder/400/320" alt="Bus" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{bus.id}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    bus.status === 'Active' ? 'bg-green-100 text-green-800' :
                    bus.status === 'Maintenance' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {bus.status}
                  </span>
                </div>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Model:</span>
                    <span>{bus.model}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Type:</span>
                    <span>{bus.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Seats:</span>
                    <span>{bus.seats}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Route:</span>
                    <span>{bus.route}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Owner:</span>
                    <span>{bus.owner}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    className="w-full py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                    onClick={() => handleViewDetails(bus.id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </main>
    </div>
  )
}

const BusDetails = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Staff');
    const busId = "NB-1234";

    const bus = {
        id: 'NB-1234',
        status: 'Active',
        model: 'Ashok Leyland Viking',
        type: 'AC',
        seats: 52,
        route: 'Colombo - Kandy',
        owner: 'Samantha Perera',
        garageNumber: 'G-123',
        manufactured: '2018',
        registered: '2019',
        staff: {
          driver: {
            name: 'Ajith Kumara',
            rating: 4.5,
            license: 'DL-123456',
            renewalDate: 'May 15, 2024',
            phone: '+94 77 234 5678'
          },
          conductor: {
            name: 'Lalith Bandara',
            rating: 4.2,
            nic: '812345678V',
            phone: '+94 71 345 6789',
            age: 38
          }
        }
      };
    
      return (
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-6">
            <button 
              className="flex items-center text-gray-700"
              onClick={() => navigate('/')}
            >
              <span className="mr-2">←</span> Back to Buses
            </button>
            <div className="flex gap-4">
              <button className="flex items-center border px-4 py-2 rounded-md">
                <span className="mr-2">✎</span> Edit Details
              </button>
              <button className="flex items-center border px-4 py-2 rounded-md">
                <span className="mr-2">🔧</span> Mark for Maintenance
              </button>
            </div>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <img src="/api/placeholder/400/320" alt="Bus" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">{bus.id}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      bus.status === 'Active' ? 'bg-green-100 text-green-800' : 
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {bus.status}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{bus.model}</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2">👤</span>
                      <span className="font-medium mr-2">Owner:</span>
                      <span>{bus.owner}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2">🏢</span>
                      <span className="font-medium mr-2">Garage Number:</span>
                      <span>{bus.garageNumber}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2">🏭</span>
                      <span className="font-medium mr-2">Manufactured:</span>
                      <span>{bus.manufactured}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2">📑</span>
                      <span className="font-medium mr-2">Registered:</span>
                      <span>{bus.registered}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2">💺</span>
                      <span className="font-medium mr-2">Seat Capacity:</span>
                      <span>{bus.seats}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2">🚍</span>
                      <span className="font-medium mr-2">Type:</span>
                      <span>{bus.type}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2">🗺️</span>
                      <span className="font-medium mr-2">Daily Route:</span>
                      <span>{bus.route}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="flex border-b">
                  <button 
                    className={`px-6 py-3 ${activeTab === 'Staff' ? 'border-b-2 border-black font-medium' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('Staff')}
                  >
                    Staff
                  </button>
                  <button 
                    className={`px-6 py-3 ${activeTab === 'History' ? 'border-b-2 border-black font-medium' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('History')}
                  >
                    History
                  </button>
                  <button 
                    className={`px-6 py-3 ${activeTab === 'Maintenance' ? 'border-b-2 border-black font-medium' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('Maintenance')}
                  >
                    Maintenance
                  </button>
                </div>
    
                {activeTab === 'Staff' && (
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold">Assigned Staff</h3>
                      <button className="bg-black text-white px-4 py-2 rounded-md flex items-center">
                        <span className="mr-2">👤</span> Assign Staff
                      </button>
                    </div>
    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border rounded-lg p-4">
                        <h4 className="text-lg font-medium mb-4">Driver</h4>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                          <div>
                            <p className="font-medium">{bus.staff.driver.name}</p>
                            <div className="flex items-center">
                              <span className="text-yellow-500 mr-1">★</span>
                              <span>{bus.staff.driver.rating} / 5.0</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2 text-gray-700">
                          <div className="flex justify-between">
                            <span>License:</span>
                            <span>{bus.staff.driver.license}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Renewal Date:</span>
                            <span>{bus.staff.driver.renewalDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Phone:</span>
                            <span>{bus.staff.driver.phone}</span>
                          </div>
                        </div>
                        <button className="w-full mt-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                          View Full Profile
                        </button>
                      </div>
    
                      <div className="border rounded-lg p-4">
                        <h4 className="text-lg font-medium mb-4">Conductor</h4>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                          <div>
                            <p className="font-medium">{bus.staff.conductor.name}</p>
                            <div className="flex items-center">
                              <span className="text-yellow-500 mr-1">★</span>
                              <span>{bus.staff.conductor.rating} / 5.0</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2 text-gray-700">
                          <div className="flex justify-between">
                            <span>NIC:</span>
                            <span>{bus.staff.conductor.nic}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Phone:</span>
                            <span>{bus.staff.conductor.phone}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Age:</span>
                            <span>{bus.staff.conductor.age} years</span>
                          </div>
                        </div>
                        <button className="w-full mt-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                          View Full Profile
                        </button>
                      </div>
                    </div>
                  </div>
                )}
    
                {activeTab === 'History' && (
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Bus History</h3>
                    <p className="text-gray-600">Historical data not available in this demo.</p>
                  </div>
                )}
    
                {activeTab === 'Maintenance' && (
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Maintenance Records</h3>
                    <p className="text-gray-600">No maintenance records available in this demo.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    };

export default BusList