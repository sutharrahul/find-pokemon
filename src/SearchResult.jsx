import React from "react";
import PokeModalCard from "./components/PokeModalCard";
import SearchResultCard from "./SearchResultCard";
import LoadingEffect from "./LoadingEffect";

function SearchResult({ data, loading, errorMessage }) {
  if (loading) {
    return (
      <span className="className=font-medium text-3xl p-5 flex justify-center items-center">
        <LoadingEffect />
        Loading...
      </span>
    );
  } else if (!data) {
    return (
      <span className="className=font-medium text-3xl p-5 flex justify-center items-center">
        {errorMessage}
      </span>
    );
  }

  return (
    <>
      <SearchResultCard data={data} />
    </>
  );
}

export default SearchResult;
