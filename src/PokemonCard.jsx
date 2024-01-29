import React from "react";

export default function PokemonCard({ name, id }) {
  return (
    <div className="m-2 flex content-center bg-white shadow-lg rounded-2xl w-72 p-1">
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
