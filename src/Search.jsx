import React, { useState } from "react";
import Searchbar from "./Searchbar";
import SearchResult from "./SearchResult";
import { fetchPokemonDataByName } from "./service";

function Search() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  async function onSearch(name) {
    setLoading(true);
    setErrorMessage("");
    setData(undefined);
    const response = await fetchPokemonDataByName(name);
    if (response?.success) {
      setData(response?.data);
    } else {
      setErrorMessage(response?.errorMessage);
    }
    setLoading(false);
  }
  return (
    <div>
      <Searchbar loading={loading} onSearch={onSearch} />
      <SearchResult data={data} loading={loading} errorMessage={errorMessage} />
    </div>
  );
}

export default Search;
