'use client';
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 51.505,
  lng: -0.09,
};

const Map: React.FC = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyB0uHS64wZD9SnG4f1i70VJnWPC5LlB2Eo',
  });

  const onLoad = (map: google.maps.Map) => {
    const waqiMapOverlay = new google.maps.ImageMapType({
      getTileUrl: (coord: { x: any; y: any; }, zoom: any) => {
        return `https://tiles.aqicn.org/tiles/usepa-aqi/${zoom}/${coord.x}/${coord.y}.png?token=569bf5fc46a085608ddbae5fa188b86080993c70`;
      },
      name: "Air Quality",
    });
    map.overlayMapTypes.insertAt(0, waqiMapOverlay);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={11}
      onLoad={onLoad}
    >
    </GoogleMap>
  ) : <></>;
};

export default React.memo(Map); 

