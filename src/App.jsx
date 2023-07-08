import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import Table from "./components/Table";
import { useSearchQuery } from "./hooks";

const App = () => {
  const API_URL = "http://127.0.0.1:8000/api/cards/";
  const { query, handleSubmit } = useSearchQuery();

  const getCardData = async (query) => {
    console.log(query);
    const { data } = await axios.get(API_URL, {
      params: {
        search: query,
      },
    });
    return data;
  };

  const { data, error, isLoading } = useQuery(["cardData", query], () =>
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
