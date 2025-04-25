import {GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import React, { useEffect, useState } from 'react'
import Bus from '../../public/assets/bus.png'; 
import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 6.9271,
  lng: 79.8612
};

const LiveBusTracking = () => {

  const [busData, setBusData] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);

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

    const interval = setInterval(fetchBusLocation, 1000);
    return () => clearInterval(interval);
  }, []);

  const BusIcon = Bus; 

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm mt-4">
      <h2 className="text-xl font-bold mb-2">Live Bus Tracking</h2>
      <p className="text-sm text-gray-500 mb-3">Real-time location of all buses currently in operation.</p>
      
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {busData.map((bus) => (
            <Marker
              key={bus.id}
              position={{ lat: bus.lat, lng: bus.lng }}
              icon={{
                url: BusIcon,
                scaledSize: new window.google.maps.Size(40, 40)
              }}
              onClick={() => setActiveMarker(bus.id)}
            >
              {activeMarker === bus.id && (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <div>{bus.title}</div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default LiveBusTracking