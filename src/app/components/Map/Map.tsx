'use client';
import React, { useEffect, useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import useAirQualityMapOverlay from '../../hooks/useAirQualityMapOverlay';
import useGoogleMapsApi from '@/utils/loadGoogleMapsApi';

const containerStyle = {
  width: '100%',
  height: '100%',
};

interface MapProps {
  centerProps: { lat: number; lng: number };
  onLoad?: (map: google.maps.Map) => void;
}

const Map: React.FC<MapProps> = ({ centerProps, onLoad }) => {
  const { isLoaded } = useGoogleMapsApi();
  const handleMapLoad = useAirQualityMapOverlay({ onLoad });
  const [center, setCenter] = useState<{ lat: number; lng: number } | null>(null);

  // Atualiza o centro do mapa dinamicamente
  useEffect(() => {
    if (centerProps) {
      setCenter(centerProps);
    }
  }, [centerProps]);

  if (typeof window === 'undefined') {
    return null;
  }

  return isLoaded && centerProps ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center} // Agora usa centerProps diretamente
      zoom={11}
      onLoad={handleMapLoad}
    />
  ) : (
    <p>Loading map...</p>
  );
};

export default React.memo(Map);
