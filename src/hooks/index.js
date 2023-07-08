import { useState } from "react";

export const useSearchQuery = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { searchForm } = Object.fromEntries(new FormData(e.target));

    console.log(searchForm);
    setQuery(searchForm);
  };

  return {
    query,
    handleSubmit,
    setQuery,
  };
};
