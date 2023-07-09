// Yarn Packages
import { useQuery } from "@tanstack/react-query";
// Components
import SearchForm from "./components/SearchForm";
import Table from "./components/Table";
// Custom Functions
import { useSearchQuery } from "./hooks";
import { getCardData } from "./utils";

const App = () => {
  const { query, member, label, handleSubmit } = useSearchQuery();

  // Search card data by keyword
  const { data, isLoading } = useQuery(["cardData", query, member, label], () =>
    getCardData(query, member, label)
  );

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      <Table data={data} isLoading={isLoading} />
    </>
  );
};

export default App;
