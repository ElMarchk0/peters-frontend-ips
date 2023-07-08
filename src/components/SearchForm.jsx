const SearchForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search" name="searchForm" />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
