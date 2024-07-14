import React from 'react';
import Search from '../Search/Search';
import Map from '../Map/Map';

const Geolocation: React.FC = () => {
  return (
    <div className="flex-1 p-4">
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-xl font-bold mb-2">Geolocation</h2>
        <p>Did you know that you can setup geo-tags? (auto updating tags based on geolocation range)</p>
        <p>Auto-geolocation has not been configured.</p>
        <button className="text-blue-600">Click here to configure</button>
        <div className="flex items-center mt-4">
          <Search />
        </div>
      </div>
      <div className="h-96">
        <Map />
      </div>
    </div>
  );
};

export default Geolocation;
