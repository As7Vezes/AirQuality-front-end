declare module 'react-use-geolocation' {
    export type GeolocationCoordinates = {
      latitude: number;
      longitude: number;
      altitude: number | null;
      accuracy: number;
      altitudeAccuracy: number | null;
      heading: number | null;
      speed: number | null;
    };
  
    export type GeolocationPosition = {
      coords: GeolocationCoordinates;
      timestamp: number;
    };
  
    export type GeolocationError = {
      code: number;
      message: string;
      PERMISSION_DENIED: number;
      POSITION_UNAVAILABLE: number;
      TIMEOUT: number;
    };
  
    export function useGeolocation(): [GeolocationPosition | null, GeolocationError | null];
  }
  