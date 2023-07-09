// Yarn Packages
import { useQuery } from "@tanstack/react-query";
// Components
import SearchForm from "./components/SearchForm";
import Table from "./components/Table";
// Custom Functions
import { useSearchQuery } from "./hooks";
import { getCardData } from "./utils";

const App = () => {
  const { query, handleSubmit } = useSearchQuery();

  // Search card data by keyword
  const { data, isLoading } = useQuery(["cardData", query], () =>
    getCardData(query)
  );

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      <Table data={data} isLoading={isLoading} />
    </>
  );
};

export default App;
