import React, { useCallback, useEffect, useState } from "react";
import { fetchPokemonData } from "../service";
import LoadingEffect from "./LoadingEffect";

export default function PokeListCard({ name, url, setModalData }) {
  const [pokeData, setPokeData] = useState();

  useEffect(() => {
    fetchAndProcessPokiData(url);
  }, [url]);

  const fetchAndProcessPokiData = async (apiUrl) => {
    const response = await fetchPokemonData(apiUrl);
    const infoData = extractPokeInfo(response);
    setPokeData(infoData);
  };

  const setPokiDataForModal = () => {
    setModalData(pokeData);
  };

  function extractPokeInfo(data) {
    return {
      height: data?.height,
      weight: data?.weight,
      name: data?.name,
      image: data?.sprites?.other?.home?.front_default,
      abilities: data?.abilities
        ?.map((item) => item?.ability?.name)
        .slice(0, 3),
      moves: data?.moves?.map((item) => item?.move?.name)?.slice(0, 6),
      types: data?.types?.map((item) => item?.type?.name)?.slice(0, 3),
      experience: data?.base_experience,
    };
  }
  return (
    <div
      className="m-2 flex content-center bg-white shadow-lg rounded-2xl w-72 p-1"
      onClick={setPokiDataForModal}
    >
      {pokeData?.image && <img src={pokeData?.image} className="w-24 h-24" />}
      {!pokeData?.image && <LoadingEffect />}
      <div className="h-full flex flex-col justify-center items-center">
        <p className="text-xl font-medium text-gray-800 capitalize ml-5">
          {name}
        </p>
      </div>
    </div>
  );
}
