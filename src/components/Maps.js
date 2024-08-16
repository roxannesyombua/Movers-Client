import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'; // Correct imports
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import '@fortawesome/fontawesome-free/css/all.min.css';


const customIcon = L.divIcon({
    html: '<i class="fa-solid fa-location-dot" style="color: red;"></i>',
    iconSize: [60, 60],
    className: 'custom-icon',
  });

const Maps = () => {
  const position = [51.505, -0.09];

  return (
    <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=baSLHRRwCxrQqvbIBHhr"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
