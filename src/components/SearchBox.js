import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { Divider, ListItem, ListItemIcon, ListItemText, List } from "@mui/material";

const CustomIcon = () => (
    <i className="fa-solid fa-location-dot" style={{ color: 'green', fontSize: '30px' }}></i>
);

const NOMINATIM_URL = "https://nominatim.openstreetmap.org/search?";

export default function SearchBox(props) {
    const { selectPosition, setSelectPosition, setDistance } = props;
    const [searchText, setSearchText] = useState("");
    const [listPlace, setListPlace] = useState([]);
    const [selectedPlaces, setSelectedPlaces] = useState([]);

    const handleSearch = () => {
        const trimmedSearchText = searchText.trim();
        if (trimmedSearchText === "") {
            console.error("Search text is empty");
            return;
        }

        const params = {
            q: trimmedSearchText,
            format: "json",
            addressdetails: 1,
            polygon_geojson: 0,
        };
        const queryString = new URLSearchParams(params).toString();

        fetch(`${NOMINATIM_URL}${queryString}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(result => {
                setListPlace(result);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the Earth in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    };

    const handlePlaceSelect = (item) => {
        const newSelectedPlaces = [...selectedPlaces, { lat: item.lat, lon: item.lon }];
        setSelectedPlaces(newSelectedPlaces);

        if (newSelectedPlaces.length === 2) {
            const distance = calculateDistance(
                newSelectedPlaces[0].lat, newSelectedPlaces[0].lon,
                newSelectedPlaces[1].lat, newSelectedPlaces[1].lon
            );
            setDistance(distance);  // Pass distance to parent
        }

        setSelectPosition({ lat: item.lat, lon: item.lon });
        setSearchText("");
        setListPlace([]);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>
                    <OutlinedInput
                        style={{ width: "100%" }}
                        value={searchText}
                        onChange={(event) => setSearchText(event.target.value)}
                        placeholder="Search for a location"
                    />
                </div>
                <div style={{ display: "flex", alignItems: "center", padding: "0px 20px" }}>
                    <Button variant="contained" color="primary" onClick={handleSearch}>
                        Search
                    </Button>
                </div>
            </div>
            <div>
                <List component="nav" aria-label="places list">
                    {listPlace.length === 0 ? (
                        <ListItem>
                            <ListItemText primary="No places found." />
                        </ListItem>
                    ) : (
                        listPlace.map((item) => (
                            <div key={item.osm_id}>
                                <ListItem button onClick={() => handlePlaceSelect(item)}>
                                    <ListItemIcon>
                                        <CustomIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item.display_name} />
                                </ListItem>
                                <Divider />
                            </div>
                        ))
                    )}
                </List>
            </div>
        </div>
    );
}
