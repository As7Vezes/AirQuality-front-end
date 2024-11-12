'use client';
import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import Map from '../Map/Map';
import useCurrentLocation from '@/app/hooks/useCurrentLocation';
import useAirQualityMapOverlay from '@/app/hooks/useAirQualityMapOverlay';
import WeaherComponent from '../weatherComponent/WeatherComponent';

interface MapProps {
  onLoad?: (map: google.maps.Map) => void;
}

const Geolocation: React.FC<MapProps> = ({ onLoad }) => {
  const { location, error } = useCurrentLocation();
  const [center, setCenter] = useState<{ lat: number; lng: number } | null>(null);
  const handleMapLoad = useAirQualityMapOverlay({ onLoad });

  useEffect(() => {
    if (location) {
      setCenter({
        lat: location.latitude,
        lng: location.longitude,
      });
    }
  }, [location]);

  return (
    <div className="flex-1 p-4">
      <div className="flex bg-white p-4 rounded-lg shadow mb-4">
        {/* Conteúdo principal */}
        <div className="flex-grow p-2">
          <h2 className="text-xl font-bold mb-2">Geolocation</h2>
          <p>Did you know that you can setup geo-tags? (auto updating tags based on geolocation range)</p>
          <p>Auto-geolocation has not been configured.</p>
          <button className="text-blue-600">Click here to configure</button>
          <div className="flex items-center mt-4">
            <Search setCenter={setCenter} />
          </div>
        </div>

        {/* Conteúdo "olá mundo" */}
        {center && <WeaherComponent local={center}/>}
      </div>

      <div className="h-96">
        {center ? <Map centerProps={center} onLoad={handleMapLoad} /> : <p>Loading map...</p>}
      </div>
    </div>


  );
};

export default Geolocation;
