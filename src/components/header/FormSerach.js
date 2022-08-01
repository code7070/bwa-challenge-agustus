import Button from "../button/ButtonGhostPurple";
import SearchIcon from "../icons/SearchIcon";
import "./FormSearch.css";

export default function FormSearch() {
  return (
    <div className="FormSearch">
      <div className="inputGroup">
        <label htmlFor="headerSearch">
          <SearchIcon />
        </label>
        <input
          id="headerSearch"
          type="search"
          placeholder="Search your favorite food"
        />
      </div>
      <Button>Log In</Button>
    </div>
  );
}
