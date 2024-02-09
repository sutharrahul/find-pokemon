import React from "react";
import BadgeList from "./components/BadgeList";
import PokeDetails from "./components/PokeDetails";
import PokeImg from "./components/PokeImg";

function SearchResultCard({ data }) {
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
        <div className="w-80 px-5 py-4 mx-auto z-50 text-gray-800  rounded-lg shadow-lg">
          <PokeImg imageUrl={data?.image} />
          <div className="w-full">
            <div className="mb-6  ">
              <p className="text-2xl font-bold text-gray-800 capitalize text-center">
                {data?.name}
              </p>
              <div className="border-b"></div>
              <BadgeList label="Types: " badgeList={data?.types} />
              <BadgeList label="Abilities: " badgeList={data?.abilities} />
              <BadgeList label="Moves: " badgeList={data?.moves} />
            </div>
            <div className="border-b mb-3"></div>
            <PokeDetails data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResultCard;
