import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

function MapComponent() {
  const [center, setCenter] = useState({ lat: 1.1, lng: -1.1 });
  
  const handleClick = () => {
    setCenter({ lat: 0.0, lng: 0.0 });
  };

  return (
    <div>
      <button onClick={handleClick}>Go to location</button>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        />
      </LoadScript>
    </div>
  );
}

export default MapComponent;







