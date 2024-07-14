// /components/Header/Header.tsx
const Header: React.FC = () => {
    return (
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="text-gray-600">Docs</button>
          <button className="text-gray-600">Events</button>
          <button className="text-gray-600">Remote</button>
          <button className="text-gray-600">Sms</button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600">Settings</button>
        </div>
      </header>
    );
  };
  
  export default Header;
  