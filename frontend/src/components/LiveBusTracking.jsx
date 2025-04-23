import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Bus from '../../public/assets/bus.png'; 
import axios from 'axios';
const LiveBusTracking = () => {

  const [busData, setBusData] = useState([]);

  useEffect(() => {
    const fetchBusLocation = async () => {
      try {
        const res = await axios.get('http://localhost:5000/bus/bus-locations');
        setBusData(res.data.data);
        console.log(busData)
        
      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    };

    fetchBusLocation();

    const interval = setInterval(fetchBusLocation, 5000);
    return () => clearInterval(interval);
  }, []);

      const busIcon = new L.Icon({
        iconUrl: Bus,
        iconSize: [40, 40], 
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
      });
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm mt-4">
      <h2 className="text-xl font-bold mb-2">Live Bus Tracking</h2>
      <p className="text-sm text-gray-500 mb-3">Real-time location of all buses currently in operation.</p>
      <div className="h-96 w-full rounded-lg overflow-hidden">
        <MapContainer center={[6.9271, 79.8612]} zoom={12} scrollWheelZoom={false} className="h-full w-full z-0">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {busData.map(bus => (
            <Marker key={bus.id} position={[bus.lat, bus.lng]} icon={busIcon}>
              <Popup>{bus.title}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  )
}

export default LiveBusTracking