import css from "./SearchBox.module.css";

const SearchBox = ({ name, onFilterChange }) => {
  return (
    <div className={css.search}>
      <p className={css.title}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={name}
        onChange={(event) => onFilterChange(event)}
      />
    </div>
  );
};

export default SearchBox;
