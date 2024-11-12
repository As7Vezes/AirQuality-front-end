import { useCallback } from 'react';

interface UseAirQualityMapOverlayProps {
  onLoad?: (map: google.maps.Map) => void;
}

const useAirQualityMapOverlay = ({ onLoad }: UseAirQualityMapOverlayProps) => {
  return useCallback((map: google.maps.Map) => {
    const token = process.env.NEXT_PUBLIC_TOKEN;

    if (!token) {
      console.error("Token de autenticação não encontrado.");
      return;
    }

    // Adiciona a camada de qualidade do ar ao mapa
    const waqiMapOverlay = new google.maps.ImageMapType({
      getTileUrl: (coord: { x: number; y: number }, zoom: number) => {
        return `https://tiles.aqicn.org/tiles/usepa-aqi/${zoom}/${coord.x}/${coord.y}.png?token=${token}`;
      },
      name: 'Air Quality',
      opacity: 0.7, // Adicionei um nível de opacidade, se necessário
    });

    // Adiciona a camada ao mapa
    map.overlayMapTypes.insertAt(0, waqiMapOverlay);

    if (onLoad) {
      onLoad(map);
    }
  }, [onLoad]);
};

export default useAirQualityMapOverlay;
