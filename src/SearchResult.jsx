import React from "react";
import PokeModalCard from "./components/PokeModalCard";

function SearchResult({ data, loading }) {
  if (loading) {
    return <span>Loading...</span>;
  } else if (!data) {
    return <span>No Data found!</span>;
  }

  return (
    <>
      <PokeModalCard data={data} />
    </>
  );
}

export default SearchResult;
