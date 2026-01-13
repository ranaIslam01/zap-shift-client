import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// মার্কার আইকন ফিক্স (Leaflet ডিফল্ট আইকন রিঅ্যাক্টে লোড না হলে এটি লাগে)
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
  const position = [23.6850, 90.3563]; // বাংলাদেশের সেন্টার

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 h-[350px] md:h-[500px] z-0 shadow-inner">
      <MapContainer 
        center={position} 
        zoom={7} 
        scrollWheelZoom={false} 
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[23.8103, 90.4125]}>
          <Popup>
            Dhaka: Our main hub is here!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;