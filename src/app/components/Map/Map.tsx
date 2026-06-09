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
  const handleLoad = (mapInstance: google.maps.Map) => {
  setMap(mapInstance);

  if (handleMapLoad) {
    handleMapLoad(mapInstance);
  }
};
  const [center, setCenter] = useState<{ lat: number; lng: number } | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  // Atualiza o centro do mapa dinamicamente
  useEffect(() => {
    if (centerProps) {
      setCenter(centerProps);
    }
  }, [centerProps]);

  useEffect(() => {
  if (!map || !centerProps) return;

  let radius = 0;
  let opacity = 0.6;
  let count = 0;

  const circle = new google.maps.Circle({
    map,
    center: centerProps,
    radius: radius,
    fillColor: "#3B82F6",
    fillOpacity: opacity,
    strokeColor: "#3B82F6",
    strokeOpacity: opacity,
    strokeWeight: 2,
  });

  const interval = setInterval(() => {
    radius += 100;
    opacity -= 0.03;

    circle.setRadius(radius);
    circle.setOptions({
      fillOpacity: opacity,
      strokeOpacity: opacity,
    });

    if (opacity <= 0) {
      count++;

      if (count >= 6) {
        clearInterval(interval);
        circle.setMap(null);
      } else {
        radius = 0;
        opacity = 0.6;
      }
    }
  }, 50);

  return () => {
    clearInterval(interval);
    circle.setMap(null);
  };
}, [centerProps, map]);


  if (typeof window === 'undefined') {
    return null;
  }

  return isLoaded && centerProps ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center} // Agora usa centerProps diretamente
      zoom={11}
      onLoad={handleLoad}
    />
  ) : (
    <p>Loading map...</p>
  );
};

export default React.memo(Map);
