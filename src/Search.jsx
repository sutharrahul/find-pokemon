import React, { useState } from "react";
import Searchbar from "./Searchbar";
import SearchResult from "./SearchResult";
import { extractPokeInfo, fetchPokemonDataByName } from "./service";

function Search() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  async function onSearch(name) {
    setLoading(true);
    const response = await fetchPokemonDataByName(name);
    setData(extractPokeInfo(response));
    setLoading(false);
  }
  return (
    <div>
      <Searchbar loading={loading} onSearch={onSearch} />
      <SearchResult data={data} loading={loading} />
    </div>
  );
}

export default Search;
