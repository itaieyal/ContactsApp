import searchIcon from "../assets/searchIcon.png";

function Search(props) {
  return (
    <span className="searchInputWrapper">
      <input
        className="searchInput"
        placeholder="Search..."
        onKeyUp={(event) => props.handleSearchKeyUp(event.target.value)}
      />
      <img src={searchIcon} alt="search icon" className="searchIcon" />
    </span>
  );
}

export default Search;
