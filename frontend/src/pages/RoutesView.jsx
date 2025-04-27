import React, {useEffect, useState} from "react";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";
import SideBar from "../components/Sidebar";
import axios from "axios";

const containerStyle = {
    width: '100%',
    height: '500px'
  };
  
const center = {
    lat: 6.9271,
    lng: 79.8612
};

const RoutesView = () => {
  const [routes, setRoutes] = useState([]); 
  const [selectedRoute, setSelectedRoute] = useState('');
  const [routePath, setRoutePath] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const res = await axios.get('http://localhost:5000/routes'); 
        setRoutes(res.data.data);
        console.log(routes);
      } catch (err) {
        console.error('Error fetching routes:', err);
      }
    };
    fetchRoutes();
  }, []);

  const handleRouteSelect = async (routeId) => {
    setSelectedRoute(routeId);
    try {
      const res = await axios.get(`http://localhost:5000/routes/${routeId}`); 
      setRoutePath(res.data.route);
    } catch (err) {
      console.error('Error fetching route path:', err);
    }
  };



  return (
    <div className="flex">
      <SideBar />
      <main className="ml-64 p-6 w-full">
    <div className="bg-white p-4 rounded-2xl shadow-sm mt-4">
      <h2 className="text-xl font-bold mb-2">Bus Routes Map</h2>
      <p className="text-sm text-gray-500 mb-3">Select a bus route to view it highlighted on the map.</p>

      <select
        className="mb-4 p-2 border rounded"
        value={selectedRoute}
        onChange={(e) => handleRouteSelect(e.target.value)}
      >
        <option value="">Select a route</option>
        {routes.map(route => (
          <option key={route.id} value={route.id}>
            {route.name || route.id}
          </option>
        ))}
      </select>

      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
          {routePath.length > 0 && (
            <Polyline
              path={routePath}
              options={{
                strokeColor: '#fcba03',
                strokeOpacity: 0.9,
                strokeWeight: 5
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
    </main>
    </div>
  )
}

export default RoutesView;