import React, {useState, useEffect} from 'react'
import SideBar from '../components/Sidebar';
import { Dialog } from "@headlessui/react";
import { Plus, Search, X } from "lucide-react";
import axios from 'axios';


const Schedules = () => {

  const [schedules, setSchedules] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSchedules = schedules.filter((schedule) => {
    const query = searchQuery.toLowerCase();
    return (
      schedule.routeNumber?.toLowerCase().includes(query) ||
      schedule.busNumber?.toLowerCase().includes(query) ||
      schedule.departure?.toLowerCase().includes(query) ||
      schedule.arrival?.toLowerCase().includes(query)
    );
  });

  useEffect(() => {
    const fetchBusLocation = async () => {
      try {
        const res = await axios.get('http://localhost:5000/schedules/');
        setSchedules(res.data.data);
        console.log(schedules);
        
      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    };

    fetchBusLocation();

}, []);

  const handleAddSchedule = (e) => {
    e.preventDefault();
    const form = e.target;
    const newSchedule = {
      routeNumber: form.routeNumber.value,
      routeName: form.routeName.value,
      departure: form.departure.value,
      arrival: form.arrival.value,
      departureTime: form.departureTime.value,
      arrivalTime: form.arrivalTime.value,
      busNumber: form.busNumber.value,
      driver: form.driver.value,
      conductor: form.conductor.value,
      frequency: form.frequency.value,
      status: form.status.value,
      stops: Array.from({ length: 2 }, (_, i) => ({
        stopName: form[`stop${i + 1}Name`]?.value || "",
        time: form[`stop${i + 1}Time`]?.value || "",
        distance: form[`stop${i + 1}Distance`]?.value || "",
      })),
    };
    setSchedules([...schedules, newSchedule]);
    setIsAddModalOpen(false);
    form.reset();
  };

  return (
    <div className='flex'>
        <SideBar />
        <main className="ml-64 p-6 w-full">
  <div className="flex justify-between items-center mb-6">
    <div>
      <h1 className="text-3xl font-bold">Time Tables</h1>
      <p className="text-sm text-gray-500">Manage and view bus schedules efficiently.</p>
    </div>
    <button
      onClick={() => setIsAddModalOpen(true)}
      className="bg-black text-white rounded-lg px-4 py-2 text-sm flex items-center"
    >
      <Plus className="mr-2" size={18} /> Add Schedule
    </button>
  </div>

  <div className="mt-6 bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold">Schedules</h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Search schedules..."
          className="pl-10 pr-4 py-2 border rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
      </div>
    </div>

    <div className="space-y-4">
      {filteredSchedules.length > 0 ? (
        filteredSchedules.map((schedule, idx) => (
          <div
            key={idx}
            onClick={() => {
              setSelectedSchedule(schedule);
              setIsViewModalOpen(true);
            }}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md cursor-pointer transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-500">Route {schedule.routeNumber}</div>
                <div className="font-semibold text-lg">{schedule.departure} → {schedule.arrival}</div>
                <div className="text-sm mt-1 text-gray-500">Bus: {schedule.busNumber}</div>
              </div>
              <div className="text-right text-sm text-gray-400">
                {schedule.departureTime} → {schedule.arrivalTime}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-400 py-10">No schedules found.</div>
      )}
    </div>
  </div>

  {/* Add Schedule Modal */}
  <Dialog open={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} className="relative z-50">
    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-auto shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <Dialog.Title className="text-2xl font-bold">Add New Schedule</Dialog.Title>
          <button onClick={() => setIsAddModalOpen(false)}>
            <X size={24} className="text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        <form onSubmit={handleAddSchedule} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <input name="routeNumber" placeholder="Route Number" className="border p-2 rounded-lg" required />
            <input name="routeName" placeholder="Route Name" className="border p-2 rounded-lg" required />
            <input name="departure" placeholder="Departure" className="border p-2 rounded-lg" required />
            <input name="arrival" placeholder="Arrival" className="border p-2 rounded-lg" required />
            <input name="departureTime" type="time" className="border p-2 rounded-lg" required />
            <input name="arrivalTime" type="time" className="border p-2 rounded-lg" required />
            <input name="busNumber" placeholder="Bus Number" className="border p-2 rounded-lg" required />
            <input name="driver" placeholder="Driver" className="border p-2 rounded-lg" />
            <input name="conductor" placeholder="Conductor" className="border p-2 rounded-lg" />
            <input name="frequency" placeholder="Frequency" className="border p-2 rounded-lg" />
            <input name="status" placeholder="Status" className="border p-2 rounded-lg" />
          </div>

          <div>
            <h4 className="font-semibold mb-2">Bus Stops</h4>
            <div className="grid grid-cols-3 gap-2">
              <input name="stop1Name" placeholder="Stop 1 Name" className="border p-2 rounded-lg" />
              <input name="stop1Time" type="time" className="border p-2 rounded-lg" />
              <input name="stop1Distance" placeholder="Distance (km)" className="border p-2 rounded-lg" />
              <input name="stop2Name" placeholder="Stop 2 Name" className="border p-2 rounded-lg" />
              <input name="stop2Time" type="time" className="border p-2 rounded-lg" />
              <input name="stop2Distance" placeholder="Distance (km)" className="border p-2 rounded-lg" />
            </div>
          </div>

          <button type="submit" className="bg-black text-white w-full py-2 rounded-lg text-sm">
            Save Schedule
          </button>
        </form>
      </Dialog.Panel>
    </div>
  </Dialog>

  {/* View Schedule Modal */}
  <Dialog open={isViewModalOpen} onClose={() => setIsViewModalOpen(false)} className="relative z-50">
    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="bg-white rounded-lg p-6 max-w-lg w-full shadow-xl">
        {selectedSchedule && (
          <>
            <div className="flex justify-between items-center mb-6">
              <Dialog.Title className="text-2xl font-bold">Schedule Details</Dialog.Title>
              <button onClick={() => setIsViewModalOpen(false)}>
                <X size={24} className="text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            <div className="space-y-3">
              <div><strong>Route:</strong> {selectedSchedule.routeNumber} - {selectedSchedule.routeName}</div>
              <div><strong>Departure:</strong> {selectedSchedule.departure} at {selectedSchedule.departureTime}</div>
              <div><strong>Arrival:</strong> {selectedSchedule.arrival} at {selectedSchedule.arrivalTime}</div>
              <div><strong>Bus Number:</strong> {selectedSchedule.busNumber}</div>
              <div><strong>Driver:</strong> {selectedSchedule.driver}</div>
              <div><strong>Conductor:</strong> {selectedSchedule.conductor}</div>
              <div><strong>Frequency:</strong> {selectedSchedule.frequency}</div>
              <div><strong>Status:</strong> {selectedSchedule.status}</div>
              <div>
                <strong>Stops:</strong>
                <ul className="list-disc list-inside space-y-1">
                  {selectedSchedule.stops.map((stop, i) => (
                    <li key={i}>
                      {stop.stopName} - {stop.time} - {stop.distance} km
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </Dialog.Panel>
    </div>
  </Dialog>
</main>

    </div>
  )
}

export default Schedules