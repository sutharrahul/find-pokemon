import React, { useState } from "react";
import { fetchPokemonData } from "../service";

export default function PokemonCard({ name, url }) {
  const [pokePowers, setPokePowers] = useState();

  const id = extractIdFromUrl(url);

  function extractIdFromUrl(url) {
    try {
      const id = url.match(/\/(\d{1,})\//)[0];
      return id.substring(1, id.length - 1);
    } catch (error) {
      return "1";
    }
  }
  async function onOpenModal() {
    const data = await fetchPokemonData(url);

    const infoData = extractPokeInfo(data);
    setPokePowers(infoData);
    console.log(infoData);
  }

  function extractPokeInfo(data) {
    return {
      height: data?.height,
      weight: data?.weight,
      name: data?.name,
      image: data?.sprites?.other?.home?.front_default,
      abilities: data?.abilities?.map((item) => item?.ability?.name),
      moves: data?.moves?.map((item) => item?.move?.name),
      types: data?.types?.map((item) => item?.type.name),
    };
  }
  return (
    <div
      className="m-2 flex content-center bg-white shadow-lg rounded-2xl w-72 p-1"
      onClick={onOpenModal}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
        className=" w-24 h-24"
      />
      <div className="h-full flex flex-col justify-center items-center">
        <p className="text-xl font-medium text-gray-800 capitalize ml-5">
          {name}
        </p>
      </div>
    </div>
  );
}
