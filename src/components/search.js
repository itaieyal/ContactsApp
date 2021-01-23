import searchIcon from "../assets/searchIcon.png";

const SEARCH_INPUT_PLACEHOLDER = "Search...";

function Search(props) {
  return (
    <span className="searchInputWrapper">
      <input
        className="searchInput"
        placeholder={SEARCH_INPUT_PLACEHOLDER}
        onKeyUp={(event) => props.handleSearchKeyUp(event.target.value)}
      />
      <img src={searchIcon} alt="search icon" className="searchIcon" />
    </span>
  );
}

export default Search;
