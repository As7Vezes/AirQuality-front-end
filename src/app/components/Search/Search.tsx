// /components/Search/Search.tsx
const Search: React.FC = () => {
    return (
      <div className="bg-white shadow p-4 rounded-lg flex items-center space-x-2">
        <input type="text" placeholder="San Fran" className="p-2 border rounded w-full" />
        <button className="bg-blue-600 text-white p-2 rounded">Submit</button>
      </div>
    );
  };
  
  export default Search;
  