import React, { useEffect, useState } from "react";
import { extractPokeInfo, fetchPokemonData } from "./service";
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

  return (
    <div
      className="m-2 flex content-center bg-white shadow-lg rounded-2xl w-72 p-1 transition hover:-translate-y-[-2px] hover:scale-110 duration-300 hover:bg-slate-200"
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
