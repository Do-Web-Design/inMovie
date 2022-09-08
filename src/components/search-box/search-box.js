import "./search-box.scss";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <div className="search-box__container">
    <img
      src={require("../../img/search_icon.png")}
      alt="Search Icon"
      className="search-box__icon"
    ></img>
    <input
      className={`search-box__input ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;
