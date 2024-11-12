'use client';
import { useEffect, useRef, useState } from "react";
import useGoogleMapsApi from "@/utils/loadGoogleMapsApi";
import useAirQualityMapOverlay from "@/app/hooks/useAirQualityMapOverlay";

const containerStyle = {
  width: '100%',
  height: '100%',
};

interface SearchProps {
  setCenter: (center: { lat: number; lng: number }) => void;
}

const Search: React.FC<SearchProps> = ({ setCenter }) => {
  const [autoComplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const { isLoaded } = useGoogleMapsApi();
  const placeAutoCompleteRef = useRef<HTMLInputElement>(null);
  const handlePlaceChanged = () => {
    if (autoComplete) {
      const place = autoComplete.getPlace();
      
      if (!place.geometry) {
        console.log("Lugar não possui geometria");
        return;
      }

      let newCenter;

      if (place.geometry.location) {
        newCenter = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
      } else if (place.geometry.viewport) {
        const viewport = place.geometry.viewport;
        const ne = viewport.getNorthEast();
        const sw = viewport.getSouthWest();

        newCenter = {
          lat: (ne.lat() + sw.lat()) / 2,
          lng: (ne.lng() + sw.lng()) / 2,
        };
      } else {
        console.log("Não foi possível determinar o centro do local");
        return;
      }

      console.log("Coordenadas obtidas: ", newCenter);

      setCenter(newCenter);
    }
  };

  useEffect(() => {
    if (isLoaded && placeAutoCompleteRef.current) {
      const autoCompleteInstance = new google.maps.places.Autocomplete(placeAutoCompleteRef.current);
      autoCompleteInstance.addListener('place_changed', handlePlaceChanged);
      setAutocomplete(autoCompleteInstance);
    }
  }, [isLoaded]);

  return (
    <div className="flex flex-col space-y-4">
      {isLoaded ? (
        <>
          <div className="flex">
            <input
              type="text"
              ref={placeAutoCompleteRef}
              placeholder="Digite um local"
              className="border p-2 flex-grow"
            />
            <button onClick={handlePlaceChanged} className="p-2 bg-blue-500 text-white">
              🔍
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Search;
