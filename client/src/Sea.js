import { useLocation } from 'react-router-dom';

function Sea() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query');

  return (
    <div>
      <h2>Search Results for: {searchQuery}</h2>
      {/* You can display or filter content based on `searchQuery` */}
    </div>
  );
}

export default Sea;
