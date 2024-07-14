import React from 'react';
import '../styles/tailwind.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Geolocation from '../components/Geolocation/Geolocation';

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <Geolocation />
      </div>
    </div>
  );
};

export default Home;
