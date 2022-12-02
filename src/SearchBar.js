const SearchBar = ({searchTerm, setSearchTerm, handleSubmit}) => {
  return (
    <div id="searchbar">
    <form onSubmit={handleSubmit}>
      <input
        id="searchTerm"
        type="search"
        value={searchTerm}
        placeholder="enter subreddit"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  </div>
  );
};

export default SearchBar;
