interface SidebarItemProps {
    title: string;
  }
  
  const SidebarItem: React.FC<SidebarItemProps> = ({ title }) => {
    return (
      <div className="mt-2">
        <button className="text-left w-full hover:bg-gray-700 p-2 rounded">{title}</button>
      </div>
    );
  };
  
  export default SidebarItem;
  