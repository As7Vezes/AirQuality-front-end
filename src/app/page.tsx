'use client';

import React, { useState } from 'react';
import './tailwind.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Geolocation from './components/Geolocation/Geolocation';

const Home: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar toggle mobile */}
      <div
        className={`
          fixed z-40 top-0 left-0 h-full bg-gray-900 transition-transform transform
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
           md:relative md:translate-x-0 
        `}
      >
        <Sidebar />
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col">
        <Header  sidebarOpen={sidebarOpen} onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Geolocation />
      </div>
    </div>
  );
};

export default Home;
