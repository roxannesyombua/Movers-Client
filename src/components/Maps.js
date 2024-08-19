import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from 'react';

const customIcon = L.divIcon({
    html: '<i class="fa-solid fa-location-dot" style="color: red;"></i>',
    iconSize: [120, 120],
    className: 'custom-icon',
});

const position = [51.505, -0.09];

function ResetCentreView(props) {
    const { selectPosition } = props;
    const map = useMap();

    useEffect(() => {
        if (selectPosition && selectPosition.lat !== undefined && selectPosition.lon !== undefined) {
            map.setView(
                L.latLng(selectPosition.lat, selectPosition.lon),
                map.getZoom(),
                {
                    animate: true,
                    duration: 0.5,
                    easeLinearity: 0.25,
                }
            );
        }
    }, [selectPosition, map]);

    return null;
}

const Maps = (props) => {
    const { selectPosition } = props;

    // Ensure lat and lon are valid
    const locationSelection = selectPosition && selectPosition.lat !== undefined && selectPosition.lon !== undefined
        ? [selectPosition.lat, selectPosition.lon]
        : null;

    return (
        <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=baSLHRRwCxrQqvbIBHhr"
            />
            {
                locationSelection && (
                    <Marker position={locationSelection} icon={customIcon}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                )
            }
            <ResetCentreView selectPosition={selectPosition} />
        </MapContainer>
    );
};

export default Maps;
