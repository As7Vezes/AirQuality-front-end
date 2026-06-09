'use client';

import SidebarItem from './SidebarItem';
import { Star, PlusCircle } from 'lucide-react';


const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col min-h-screen">

      <h2 className="text-xl font-semibold mb-6 flex justify-center text-center">Configurações</h2>

      <nav className="flex flex-col space-y-2">
        <SidebarItem title="Cidades Favoritas" icon={<Star className="w-5 h-5" />} />
      </nav>

      <div className="mt-auto pt-6">
        <button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded-lg shadow">
          <PlusCircle className="w-5 h-5" />
          Nova geo-tag
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
