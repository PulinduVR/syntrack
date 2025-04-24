import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from './SideBar';

const StaffDetails = () => {

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('History');

    const staff = {
        id: '1',
        name: 'Ajith Kumara',
        type: 'Driver',
        license: 'DL-123456',
        nic: '782345619V',
        licenseRenewal: 'May 15, 2024',
        joined: 'Jun 15, 2020',
        rating: 4.5,
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
      };

      const renderStars = (count) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          stars.push(
            <span key={i} className={i < count ? "text-yellow-500" : "text-gray-300"}>★</span>
          );
        }
        return stars;
      };
  return (
    <div className='flex'>
        <SideBar />
        <main className="ml-64 p-6 w-full">
        <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <button 
          className="flex items-center text-gray-700"
          onClick={() => navigate('/')}
        >
          <span className="mr-2">←</span> Back to Staff
        </button>
        <div className="flex gap-4">
          <button className="flex items-center border px-4 py-2 rounded-md">
            <span className="mr-2">✎</span> Edit Profile
          </button>
          <button className="flex items-center border border-red-500 text-red-500 px-4 py-2 rounded-md">
            Deactivate
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-4"></div>
              <h2 className="text-2xl font-bold">{staff.name}</h2>
              <span className="px-3 py-1 rounded-full text-sm text-white bg-black my-2">
                {staff.type}
              </span>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">★</span>
                <span>{staff.rating} / 5.0</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">📄</span>
                <div>
                  <p className="text-gray-500">NIC:</p>
                  <p className="font-medium">{staff.nic}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">🪪</span>
                <div>
                  <p className="text-gray-500">License:</p>
                  <p className="font-medium">{staff.license}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">🔄</span>
                <div>
                  <p className="text-gray-500">License Renewal:</p>
                  <p className="font-medium">{staff.licenseRenewal}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">📅</span>
                <div>
                  <p className="text-gray-500">Joined:</p>
                  <p className="font-medium">{staff.joined}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">👤</span>
                <div>
                  <p className="text-gray-500">Age:</p>
                  <p className="font-medium">{staff.age} years</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">⚧</span>
                <div>
                  <p className="text-gray-500">Gender:</p>
                  <p className="font-medium">{staff.gender}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">📍</span>
                <div>
                  <p className="text-gray-500">Address:</p>
                  <p className="font-medium">{staff.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">📞</span>
                <div>
                  <p className="text-gray-500">Phone:</p>
                  <p className="font-medium">{staff.phone}</p>
                </div>
              </div>
              
              {staff.email && (
                <div className="flex items-start">
                  <span className="text-gray-500 mr-2">✉️</span>
                  <div>
                    <p className="text-gray-500">Email:</p>
                    <p className="font-medium">{staff.email}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
            <div className="flex border-b">
              <button 
                className={`px-6 py-3 ${activeTab === 'History' ? 'border-b-2 border-black font-medium' : 'text-gray-500'}`}
                onClick={() => setActiveTab('History')}
              >
                History
              </button>
              <button 
                className={`px-6 py-3 ${activeTab === 'Offenses' ? 'border-b-2 border-black font-medium' : 'text-gray-500'}`}
                onClick={() => setActiveTab('Offenses')}
              >
                Offenses
              </button>
              <button 
                className={`px-6 py-3 ${activeTab === 'Ratings' ? 'border-b-2 border-black font-medium' : 'text-gray-500'}`}
                onClick={() => setActiveTab('Ratings')}
              >
                Ratings
              </button>
            </div>

            {activeTab === 'History' && (
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Work History</h3>
                
                <div className="mb-8">
                  <h4 className="text-lg font-medium mb-2">Driving History</h4>
                  <p className="text-gray-600 mb-4">Buses driven by this driver</p>
                  
                  <div className="space-y-4">
                    {staff.drivingHistory.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="bg-gray-200 rounded-full p-4 mr-4">
                          <span className="text-gray-600">🚌</span>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h5 className="font-medium mr-3">{item.busId}</h5>
                            {item.status && (
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                {item.status}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600">{item.period}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Accident History</h4>
                  <p className="text-gray-600 mb-4">Record of accidents involving this driver</p>
                  
                  {staff.accidents.length > 0 ? (
                    <div className="space-y-4">
                      {staff.accidents.map((accident, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-red-100 rounded-full p-4 mr-4 mt-1">
                            <span className="text-red-500">⚠️</span>
                          </div>
                          <div>
                            <div className="flex items-center">
                              <h5 className="font-medium mr-3">{accident.type}</h5>
                              <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                                {accident.severity}
                              </span>
                            </div>
                            <p className="text-gray-600">{accident.date}</p>
                            <p className="mt-2">{accident.description}</p>
                            <p className="text-gray-600 mt-1">Outcome: {accident.outcome}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No accident history recorded.</p>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'Offenses' && (
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Offense History</h3>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Recorded Offenses</h4>
                  <p className="text-gray-600 mb-4">History of traffic violations and other offenses</p>
                  
                  {staff.offenses.length > 0 ? (
                    <div className="space-y-4">
                      {staff.offenses.map((offense, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-yellow-100 rounded-full p-4 mr-4 mt-1">
                            <span className="text-yellow-600">⚠️</span>
                          </div>
                          <div>
                            <h5 className="font-medium">{offense.type}</h5>
                            <p className="text-gray-600">{offense.date}</p>
                            <p className="mt-2">{offense.description}</p>
                            <p className="text-gray-600 mt-1">Penalty: {offense.penalty}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No offenses recorded.</p>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'Ratings' && (
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Passenger Ratings</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2">Rating Summary</h4>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">Overall passenger satisfaction rating</p>
                    <div className="bg-gray-100 px-4 py-2 rounded-md flex items-center">
                      <span className="text-yellow-500 text-2xl mr-2">★</span>
                      <span className="text-2xl font-bold">{staff.rating}</span>
                      <span className="text-gray-500"> /5.0</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {staff.ratings.map((rating, index) => (
                    <div key={index} className="border-b pb-4 last:border-0">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <div className="bg-gray-200 rounded-full p-3 mr-3">
                            <span>👤</span>
                          </div>
                          <div className="flex">
                            {renderStars(rating.stars)}
                          </div>
                        </div>
                        <p className="text-gray-500">{rating.date}</p>
                      </div>
                      <p className="ml-12">"{rating.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
        </main>
    </div>
  )
}

export default StaffDetails