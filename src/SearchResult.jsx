import React from "react";
import PokeModalCard from "./components/PokeModalCard";
import LoadingEffect from "./LoadingEffect";
import BadgeList from "./components/BadgeList";
import PokeDetails from "./components/PokeDetails";
import PokeImg from "./components/PokeImg";
import Modal from "./components/Modal";

function SearchResult({ data, loading, errorMessage, setData }) {
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
      <div className="hidden sm:block h-full w-full">
        <div className="flex justify-between p-10 items-center  ">
          <div className="flex flex-col capitalize gap-3">
            <h1 className="text-6xl font-bold">{data?.name}</h1>
            <div className="text-xl">
              <BadgeList label="Types: " badgeList={data?.types} />
              <BadgeList label="Abilities: " badgeList={data?.abilities} />
              <BadgeList label="Moves: " badgeList={data?.moves} />
              <PokeDetails data={data} />
            </div>
          </div>
          <PokeImg imageUrl={data?.image} />
        </div>
      </div>
      <div className=" sm:hidden">
        <Modal onClose={() => setData(undefined)}>
          <PokeModalCard data={data} />
        </Modal>
      </div>
    </>
  );
}

export default SearchResult;
