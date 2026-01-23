function SearchBar({ query, setQuery }) {
  return (
    <input
      className="search-input"
      placeholder="Search products..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchBar;
