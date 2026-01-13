import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Leaflet মার্কার আইকন ফিক্স
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  const position = [23.6850, 90.3563]; 

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 h-75 sm:h-100 md:h-125 z-0">
      <MapContainer 
        center={position} 
        zoom={7} 
        scrollWheelZoom={false} 
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[23.8103, 90.4125]}>
          <Popup>Dhaka Office</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;