import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// মার্কার আইকন ফিক্স
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// সার্চ করলে ম্যাপকে ওই জায়গায় নিয়ে যাওয়ার জন্য আপডেট
function RecenterMap({ centers }) {
  const map = useMap();
  if (centers.length > 0 && centers.length < 64) {
    // সার্চ রেজাল্ট থাকলে প্রথম রেজাল্টের জায়গায় ম্যাপ যাবে
    map.setView([centers[0].latitude, centers[0].longitude], 10);
  } else if (centers.length === 64 || centers.length === 0) {
    // সব ডাটা থাকলে বা খালি থাকলে ডিফল্ট ভিউ (বাংলাদেশ)
    map.setView([23.685, 90.3563], 7);
  }
  return null;
}

const MapComponent = ({ serviceCenters }) => {
  const position = [23.685, 90.3563]; // বাংলাদেশের সেন্টার

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 h-87.5 md:h-125 z-0 shadow-inner">
      <MapContainer
        center={position}
        zoom={7}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        {/* ম্যাপ অটো-ফোকাস আপডেট */}
        <RecenterMap centers={serviceCenters} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {serviceCenters.map((center, idx) => (
          <Marker key={idx} position={[center.latitude, center.longitude]}>
            <Popup>
              <strong>{center.district}</strong><br />
              {center.covered_area.join(', ')}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;