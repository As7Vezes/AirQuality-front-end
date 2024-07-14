import SidebarItem from './SidebarItem';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-lg font-bold">Geo Settings</h2>
      <SidebarItem title="Geolocation" />
      <SidebarItem title="App Settings" />
      <button className="mt-4 w-full bg-blue-600 p-2 rounded">Click to create geo-tag</button>
      <div className="mt-4">
        <input type="file" className="hidden" id="file-upload" />
        <label htmlFor="file-upload" className="w-full bg-gray-700 p-2 rounded cursor-pointer">
          Upload
        </label>
      </div>
    </aside>
  );
};

export default Sidebar;
