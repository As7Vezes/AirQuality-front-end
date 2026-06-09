'use client';
import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import Map from '../Map/Map';
import useCurrentLocation from '@/app/hooks/useCurrentLocation';
import useAirQualityMapOverlay from '@/app/hooks/useAirQualityMapOverlay';
import WeatherComponent from '../weatherComponent/WeatherComponent';

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
      console.log('Localização atual:', location);
    }
  }, [location]);

  useEffect(() => {
    if (center) {
      console.log("Center atualizado:", center);
    }
  }, [center]);

  

  return (
    <div className="flex-1 p-4">
      {/* Grid responsivo */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 p-4 rounded-lg shadow mb-4 bg-white items-center lg:items-start text-center lg:text-left">


        {/* Bloco com texto e busca */}
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-2xl font-bold text-gray-800">🌍 Geolocalização e Monitoramento</h1>
          <p className="text-gray-600 my-3 max-w-[600px]">
            🔍 Busque por um endereço ou localização para visualizar dados de qualidade do ar e condições meteorológicas
          </p>
          <div className="flex justify-center mt-4">
            <Search setCenter={setCenter} />
          </div>
        </div>


        {/* WeatherComponent ao lado em telas grandes, abaixo em telas pequenas */}
        {center && (
          <div className="w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
            <WeatherComponent local={center} />
          </div>
        )}
      </div>

      {/* Mapa */}
      <div className="h-96">
        {center ? <Map centerProps={center} onLoad={handleMapLoad} /> : <p>Loading map...</p>}
      </div>
    </div>
  );
};

export default Geolocation;
