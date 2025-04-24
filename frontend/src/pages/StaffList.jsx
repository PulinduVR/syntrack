import React, {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";

const StaffList = () => {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All Staff');
  const [searchQuery, setSearchQuery] = useState('');

  const staffMembers = [
    {
      id: '1',
      name: 'Ajith Kumara',
      type: 'Driver',
      license: 'DL-123456',
      nic: '782345619V',
      licenseRenewal: 'May 15, 2024',
      joined: 'Jun 15, 2020',
      rating: 4.5,
      bus: 'NB-1234',
      age: 42,
      gender: 'Male',
      address: '45 Lake Road, Colombo 06',
      phone: '+94 77 234 5678',
      email: 'ajith.kumara@example.com',
      drivingHistory: [
        {
          busId: 'NB-1234',
          period: '2020-Present',
          status: 'Current'
        },
        {
          busId: 'NW-7890',
          period: '2018-2020'
        }
      ],
      accidents: [
        {
          type: 'Minor Accident',
          severity: 'Minor',
          date: 'Aug 22, 2021',
          description: 'Side mirror damage while parking',
          outcome: 'No injuries'
        }
      ],
      offenses: [
        {
          type: 'Speeding',
          date: 'Mar 15, 2022',
          description: 'Exceeded speed limit by 15 km/h',
          penalty: 'Fine'
        }
      ],
      ratings: [
        {
          stars: 5,
          comment: 'Very professional and punctual',
          date: 'May 10, 2023'
        },
        {
          stars: 4,
          comment: 'Good driving, but was a bit late',
          date: 'Apr 22, 2023'
        },
        {
          stars: 5,
          comment: 'Excellent service and very helpful',
          date: 'Mar 15, 2023'
        }
      ]
    },
    {
      id: '2',
      name: 'Lalith Bandara',
      type: 'Conductor',
      nic: '812345678V',
      joined: 'Jul 22, 2020',
      rating: 4.2,
      bus: 'NB-1234'
    },
    {
      id: '3',
      name: 'Chaminda Silva',
      type: 'Driver',
      license: 'DL-234567',
      joined: 'Mar 10, 2019',
      rating: 4.7,
      bus: 'WP-5678'
    }
  ];

  const filteredStaff = staffMembers.filter(staff => {
    // Filter based on tab
    if (activeTab === 'Drivers' && staff.type !== 'Driver') return false;
    if (activeTab === 'Conductors' && staff.type !== 'Conductor') return false;

    // Filter based on search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        staff.name.toLowerCase().includes(query) ||
        (staff.license && staff.license.toLowerCase().includes(query)) ||
        (staff.nic && staff.nic.toLowerCase().includes(query))
      );
    }

    return true;
  });

  const handleViewDetails = (staffId) => {
    navigate(`/staff/${staffId}`);
  };

  return (
    <div className="flex">
        <SideBar />
        <main className="ml-64 p-6 w-full">
        <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold">Staff</h1>
          <p className="text-gray-600">Manage and monitor all drivers and conductors in the system.</p>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md flex items-center">
          <span className="mr-2">👤</span> Add Staff Member
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded-md ${activeTab === 'All Staff' ? 'bg-gray-200' : 'bg-gray-100'}`}
            onClick={() => setActiveTab('All Staff')}
          >
            All Staff
          </button>
          <button
            className={`px-4 py-2 rounded-md ${activeTab === 'Drivers' ? 'bg-gray-200' : 'bg-gray-100'}`}
            onClick={() => setActiveTab('Drivers')}
          >
            Drivers
          </button>
          <button
            className={`px-4 py-2 rounded-md ${activeTab === 'Conductors' ? 'bg-gray-200' : 'bg-gray-100'}`}
            onClick={() => setActiveTab('Conductors')}
          >
            Conductors
          </button>
        </div>
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search by name, NIC or license..."
            className="w-full px-4 py-2 border rounded-md pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
            🔍
          </span>
        </div>
      </div>

      <div className="border-gray-200 bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-2xl font-bold mb-2">Staff Members</h2>
        <p className="text-gray-600 mb-6">A list of all drivers and conductors registered in the system. Click on a staff member to view more details.</p>

        <div className="space-y-4">
          {filteredStaff.map((staff) => (
            <div key={staff.id} className="border-gray-500 shadow-md rounded-lg bg-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="flex items-center mb-1">
                      <h3 className="text-xl font-bold mr-3">{staff.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm text-white ${
                        staff.type === 'Driver' ? 'bg-black' : 'bg-gray-600'
                      }`}>
                        {staff.type}
                      </span>
                    </div>
                    <p className="text-gray-600">
                      {staff.type === 'Driver' ? `License: ${staff.license}` : `NIC: ${staff.nic}`}
                    </p>
                    <div className="flex items-center mt-2 text-sm text-gray-600">
                      <span className="flex items-center mr-4">
                        <span className="mr-1">📅</span> Joined: {staff.joined}
                      </span>
                      <span className="flex items-center mr-4">
                        <span className="mr-1">🚌</span> Bus: {staff.bus}
                      </span>
                      <span className="flex items-center text-yellow-500">
                        <span className="mr-1">★</span> {staff.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    className="px-4 py-2 border rounded-md hover:bg-gray-50 mr-2"
                    onClick={() => handleViewDetails(staff.id)}
                  >
                    View Details
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    ⋯
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

export default StaffList