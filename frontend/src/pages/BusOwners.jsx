
import React, { useState } from "react";
import { User, Calendar, UserCircle, MapPin, Phone, Mail, Bus, ChevronLeft, Edit, PlusCircle, Users } from "lucide-react";
import SideBar from "../components/SideBar";

const BusOwners = () => {
  const [activeTab, setActiveTab] = useState("All Owners");
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [detailsActiveTab, setDetailsActiveTab] = useState("Buses");

  // Mock data for bus owners
  const busOwners = [
    {
      id: 1,
      name: "Samantha Perera",
      status: "Active",
      nic: "857432961V",
      joinedDate: "Mar 15, 2020",
      busesOwned: 5,
      age: "38 years",
      gender: "Female",
      address: "123 Main Street, Colombo 05",
      phone: "+94 77 123 4567",
      email: "samantha.perera@example.com",
      buses: [
        {
          id: "NB-1234",
          status: "Active",
          model: "Ashok Leyland Viking",
          type: "AC",
          seats: 52,
          route: "Colombo - Kandy",
        },
        {
          id: "WP-5678",
          status: "Active",
          model: "Tata Marcopolo",
          type: "Non-AC",
          seats: 45,
          route: "Colombo - Galle",
        },
        // Additional buses would be added here
      ],
      staff: [
        {
          id: 1,
          name: "Ajith Kumara",
          role: "Driver",
          nic: "782345619V",
          phone: "+94 77 234 5678",
          bus: "NB-1234",
        },
        {
          id: 2,
          name: "Lalith Bandara",
          role: "Conductor",
          nic: "812345678V",
          phone: "+94 71 345 6789",
          bus: "NB-1234",
        },
        {
          id: 3,
          name: "Chaminda Silva",
          role: "Driver",
          nic: "763456789V",
          phone: "+94 76 456 7890",
          bus: "WP-5678",
        },
        // Additional staff would be added here
      ],
    },
    {
      id: 2,
      name: "Nimal Fernando",
      status: "Active",
      nic: "761234589V",
      joinedDate: "Jul 22, 2018",
      busesOwned: 3,
      age: "45 years",
      gender: "Male",
      address: "45 Temple Road, Kandy",
      phone: "+94 71 987 6543",
      email: "nimal.fernando@example.com",
      buses: [
        // Buses would be added here
      ],
      staff: [
        // Staff would be added here
      ],
    },
    {
      id: 3,
      name: "Kumari Silva",
      status: "Active",
      nic: "905678123V",
      joinedDate: "Jan 10, 2021",
      busesOwned: 2,
      age: "32 years",
      gender: "Female",
      address: "78 Beach Road, Galle",
      phone: "+94 77 456 7890",
      email: "kumari.silva@example.com",
      buses: [
        // Buses would be added here
      ],
      staff: [
        // Staff would be added here
      ],
    },
  ];

  // Filter bus owners based on active tab
  const filteredOwners = busOwners.filter((owner) => {
    if (activeTab === "All Owners") return true;
    if (activeTab === "Active") return owner.status === "Active";
    if (activeTab === "Inactive") return owner.status === "Inactive";
    return true;
  });

  // Handle viewing owner details
  const handleViewDetails = (owner) => {
    setSelectedOwner(owner);
  };

  // Handle back button click
  const handleBackToOwners = () => {
    setSelectedOwner(null);
  };

  // Owner list view
  const renderOwnersList = () => {
    return (
        <div className="flex">
            <SideBar />
        <main className="ml-64 p-6 w-full">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Bus Owners</h1>
            <p className="text-gray-600">Manage and monitor all registered bus owners in the system.</p>
          </div>
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg">
            <User size={18} />
            Add Bus Owner
          </button>
        </div>

        <div className="flex mb-4">
          <div className="flex bg-gray-100 rounded-lg mr-4">
            <button
              className={`px-6 py-2 rounded-lg ${activeTab === "All Owners" ? "bg-white shadow" : ""}`}
              onClick={() => setActiveTab("All Owners")}
            >
              All Owners
            </button>
            <button
              className={`px-6 py-2 rounded-lg ${activeTab === "Active" ? "bg-white shadow" : ""}`}
              onClick={() => setActiveTab("Active")}
            >
              Active
            </button>
            <button
              className={`px-6 py-2 rounded-lg ${activeTab === "Inactive" ? "bg-white shadow" : ""}`}
              onClick={() => setActiveTab("Inactive")}
            >
              Inactive
            </button>
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by name or NIC..."
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-2">Registered Bus Owners</h2>
          <p className="text-gray-600 mb-6">
            A list of all bus owners registered in the system. Click on a bus owner to view more details.
          </p>

          <div className="space-y-4">
            {filteredOwners.map((owner) => (
              <div key={owner.id} className="border rounded-lg p-4">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <h3 className="text-lg font-bold mr-2">{owner.name}</h3>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        {owner.status}
                      </span>
                    </div>
                    <p className="text-gray-700">NIC: {owner.nic}</p>
                    <div className="flex items-center text-gray-500 mt-2">
                      <div className="flex items-center mr-4">
                        <Calendar size={16} className="mr-1" />
                        Joined: {owner.joinedDate}
                      </div>
                      <div className="flex items-center">
                        <Bus size={16} className="mr-1" />
                        {owner.busesOwned} buses
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleViewDetails(owner)}
                      className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 mr-2"
                    >
                      View Details
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        ></path>
                      </svg>
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
    );
  };

  const renderOwnerDetails = () => {
    if (!selectedOwner) return null;

    const drivers = selectedOwner.staff.filter((s) => s.role === "Driver");
    const conductors = selectedOwner.staff.filter((s) => s.role === "Conductor");

    return (
        <div className="flex">
            <SideBar />
            <main className="ml-64 p-6 w-full">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handleBackToOwners}
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <ChevronLeft size={20} className="mr-1" />
            Back to Bus Owners
          </button>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg">
              <Edit size={18} />
              Edit Profile
            </button>
            <button className="text-red-500 border border-gray-300 px-4 py-2 rounded-lg">
              Deactivate Account
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4 bg-white rounded-lg shadow p-6">
            <div className="flex flex-col items-center mb-4">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-3"></div>
              <h2 className="text-2xl font-bold">{selectedOwner.name}</h2>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                {selectedOwner.status}
              </span>
            </div>

            <div className="space-y-3 mt-6">
              <div className="flex items-center">
                <User className="text-gray-500 mr-3 w-5 h-5" />
                <div>
                  <p className="text-gray-500">NIC:</p>
                  <p className="font-medium">{selectedOwner.nic}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Calendar className="text-gray-500 mr-3 w-5 h-5" />
                <div>
                  <p className="text-gray-500">Joined:</p>
                  <p className="font-medium">{selectedOwner.joinedDate}</p>
                </div>
              </div>

              <div className="flex items-center">
                <UserCircle className="text-gray-500 mr-3 w-5 h-5" />
                <div>
                  <p className="text-gray-500">Age:</p>
                  <p className="font-medium">{selectedOwner.age}</p>
                </div>
              </div>

              <div className="flex items-center">
                <UserCircle className="text-gray-500 mr-3 w-5 h-5" />
                <div>
                  <p className="text-gray-500">Gender:</p>
                  <p className="font-medium">{selectedOwner.gender}</p>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="text-gray-500 mr-3 w-5 h-5" />
                <div>
                  <p className="text-gray-500">Address:</p>
                  <p className="font-medium">{selectedOwner.address}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="text-gray-500 mr-3 w-5 h-5" />
                <div>
                  <p className="text-gray-500">Phone:</p>
                  <p className="font-medium">{selectedOwner.phone}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="text-gray-500 mr-3 w-5 h-5" />
                <div>
                  <p className="text-gray-500">Email:</p>
                  <p className="font-medium">{selectedOwner.email}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Bus className="text-gray-500 mr-3 w-5 h-5" />
                <div>
                  <p className="text-gray-500">Buses Owned:</p>
                  <p className="font-medium">{selectedOwner.busesOwned}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Buses and Staff */}
          <div className="col-span-12 md:col-span-8">
            <div className="bg-gray-100 rounded-lg mb-6">
              <button
                className={`px-6 py-3 rounded-lg ${
                  detailsActiveTab === "Buses" ? "bg-white shadow" : ""
                }`}
                onClick={() => setDetailsActiveTab("Buses")}
              >
                Buses ({selectedOwner.busesOwned})
              </button>
              <button
                className={`px-6 py-3 rounded-lg ${
                  detailsActiveTab === "Staff" ? "bg-white shadow" : ""
                }`}
                onClick={() => setDetailsActiveTab("Staff")}
              >
                Staff ({selectedOwner.staff.length})
              </button>
            </div>

            {detailsActiveTab === "Buses" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Buses Owned</h3>
                  <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg">
                    <PlusCircle size={18} />
                    Add New Bus
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedOwner.buses.map((bus) => (
                    <div key={bus.id} className="bg-white rounded-lg shadow p-4">
                      <div className="h-40 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                        <Mail className="text-gray-300 w-10 h-10" />
                      </div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold">{bus.id}</h4>
                        <span
                          className={`text-xs px-2 py-1 rounded ${
                            bus.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {bus.status}
                        </span>
                      </div>
                      <div className="space-y-1 mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Model:</span>
                          <span className="font-medium">{bus.model}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Type:</span>
                          <span className="font-medium">{bus.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Seats:</span>
                          <span className="font-medium">{bus.seats}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Route:</span>
                          <span className="font-medium">{bus.route}</span>
                        </div>
                      </div>
                      <button className="w-full border border-gray-300 rounded-lg py-2 text-gray-700 hover:bg-gray-50">
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {detailsActiveTab === "Staff" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Staff Members</h3>
                  <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg">
                    <Users size={18} />
                    Add Staff Member
                  </button>
                </div>

                <div className="bg-gray-100 rounded-lg mb-4">
                  <button className="px-6 py-2 rounded-lg bg-white shadow">
                    All Staff ({selectedOwner.staff.length})
                  </button>
                  <button className="px-6 py-2 rounded-lg">
                    Drivers ({drivers.length})
                  </button>
                  <button className="px-6 py-2 rounded-lg">
                    Conductors ({conductors.length})
                  </button>
                </div>

                <div className="space-y-4">
                  {selectedOwner.staff.map((staffMember) => (
                    <div key={staffMember.id} className="bg-white rounded-lg shadow p-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <h4 className="font-bold mr-2">{staffMember.name}</h4>
                            <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
                              {staffMember.role}
                            </span>
                          </div>
                          <p className="text-gray-700">NIC: {staffMember.nic}</p>
                          <div className="flex items-center text-gray-500 mt-1">
                            <div className="flex items-center mr-4">
                              <Phone size={14} className="mr-1" />
                              {staffMember.phone}
                            </div>
                            <div className="flex items-center">
                              <Bus size={14} className="mr-1" />
                              Bus: {staffMember.bus}
                            </div>
                          </div>
                        </div>
                        <button className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
        </main>
        
      </div>
      
    );
  };

  return selectedOwner ? renderOwnerDetails() : renderOwnersList();
}

export default BusOwners;