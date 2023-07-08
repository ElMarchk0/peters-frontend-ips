const SearchForm = ({ handleSubmit, isLoading }) => {
  if (isLoading) return <p>Loading...</p>;
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search" name="searchForm" />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
