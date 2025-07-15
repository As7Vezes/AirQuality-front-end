'use client';

import {
  Settings,
  BookText,
  CalendarCheck2,
  Wifi,
  MessageSquareText,
  UserCircle,
  Menu
} from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, sidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm px-4 sm:px-6 py-4 flex items-center justify-between w-full flex-wrap gap-4">
      {/* Toggle menu */}
      <button
        onClick={onToggleSidebar}
        className={`block md:hidden z-50 p-2 rounded-md transition 
          ${sidebarOpen ? 'text-white bg-gray-900' : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'}`}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Navegação esquerda */}
      <nav className="flex items-center gap-4 flex-wrap">
        <button className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition">
          <BookText className="w-5 h-5" />
          <span className="hidden sm:inline">Docs</span>
        </button>
        <button className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition">
          <CalendarCheck2 className="w-5 h-5" />
          <span className="hidden sm:inline">Events</span>
        </button>
        <button className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition">
          <Wifi className="w-5 h-5" />
          <span className="hidden sm:inline">Remote</span>
        </button>
        <button className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition">
          <MessageSquareText className="w-5 h-5" />
          <span className="hidden sm:inline">Sms</span>
        </button>
      </nav>

      {/* Ações à direita */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition">
          <Settings className="w-5 h-5" />
          <span className="hidden sm:inline">Settings</span>
        </button>
        <button className="hover:scale-105 transition transform">
          <UserCircle className="w-8 h-8 text-gray-600 hover:text-green-600" />
        </button>
      </div>
    </header>

  );
};

export default Header;
