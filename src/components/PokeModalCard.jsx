import React from "react";
import BadgeList from "./BadgeList";
import PokeDetails from "./PokeDetails";
import PokeImg from "./PokeImg";

export default function PokeModalCard({ data }) {
  return (
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
  );
}
