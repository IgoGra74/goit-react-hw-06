import css from "./SearchBox.module.css";

const SearchBox = ({ search, setSearch }) => {
  return (
    <div className={css.search}>
      <p className={css.title}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
