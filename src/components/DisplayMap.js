import React, { useState } from "react";
import Maps from "./Maps";
import SearchBox from "./SearchBox";
import Quotation from "./Quotation";

function DisplayMap() {
    const [selectPosition, setSelectPosition] = useState(null);
    const [distance, setDistance] = useState(null);
    const [showQuotation, setShowQuotation] = useState(false);

    const handleGetQuotation = () => {
        if (distance) {  // Ensure distance is calculated before showing the quotation
            setShowQuotation(true);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: "row", width: '100vw', height: "100vh" }}>
            <div style={{ border: "2px solid green", width: "75vw", height: "100vh" }}>
                <Maps selectPosition={selectPosition} />
            </div>
            <div style={{ border: "2px solid blue", width: "50vw", height: "100vh", flexGrow: 1 }}>
                <SearchBox 
                    selectPosition={selectPosition} 
                    setSelectPosition={setSelectPosition} 
                    setDistance={setDistance} 
                />
                {distance && (
                    <div style={{ padding: "20px" }}>
                        <h3>Distance: {distance.toFixed(2)} km</h3>
                    </div>
                )}
                <div style={{ padding: "20px" }}>
                    <button onClick={handleGetQuotation} disabled={!distance}>Get Quotation</button>
                </div>
                {showQuotation && (
                    <Quotation distance={distance} />
                )}
            </div>
        </div>
    );
}

export default DisplayMap;
