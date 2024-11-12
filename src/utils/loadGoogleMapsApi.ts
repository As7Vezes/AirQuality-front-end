import { useJsApiLoader } from '@react-google-maps/api';

const useGoogleMapsApi = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ['core', 'maps', 'places', 'marker'],
  });

  return { isLoaded };
};

export default useGoogleMapsApi;