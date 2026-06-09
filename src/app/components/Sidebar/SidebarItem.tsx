interface SidebarItemProps {
  title: string;
  icon: React.ReactNode;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ title, icon }) => {
  return (
    <div className="mt-2">
      <button className="flex items-center gap-3 w-full p-2 rounded hover:bg-gray-700 transition-colors">
        <span className="flex items-center justify-center text-lg">
          {icon}
        </span>

        <span className="text-sm font-medium">
          {title}
        </span>
      </button>
    </div>
  );
};

export default SidebarItem;