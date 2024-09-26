import SidebarItem from './SidebarItem';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-lg font-bold">Geo Settings</h2>
      <SidebarItem title="Geolocation" />
      <SidebarItem title="Favorites Cities" />
      <button className="mt-4 w-full bg-blue-600 p-2 rounded">Click to create geo-tag</button>
      <div className="mt-4">
      </div>
    </aside>
  );
};

export default Sidebar;
