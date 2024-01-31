import React from "react";
import Badge from "./Badge";

export default function PokeModalCard({ data }) {
  return (
    <div className="w-80 px-5 py-4 mx-auto z-50 text-gray-800  rounded-lg shadow-lg">
      <div className="pt-1 mx-auto -mt-28 text-center">
        <img
          alt="profil"
          src={data?.image}
          className="mx-auto object-cover h-44 w-44 "
        />
      </div>
      <div className="w-full">
        <div className="mb-6  ">
          <p className="text-2xl font-bold text-gray-800 capitalize text-center">
            {data?.name}
          </p>
          <div className="border-b"></div>
          <p className="mt-2 flex flex-wrap">
            <span className="mr-2 font-semibold">Types :</span>
            {data?.types?.map((type) => (
              <Badge text={type} />
            ))}
          </p>
          <p className="mt-2 flex flex-wrap">
            <span className="mr-2 font-semibold">Abilities :</span>
            {data?.abilities?.map((ability) => (
              <Badge text={ability} />
            ))}
          </p>
          <p className="mt-2 flex flex-wrap ">
            <span className="mr-2 font-semibold">Moves :</span>
            {data?.moves?.map((move) => (
              <Badge text={move} />
            ))}
          </p>
        </div>
        <div className="border-b mb-3"></div>

        <div className="w-full p-2 mb-4 bg-pink-100 rounded-lg text-center ">
          <div className="flex items-center justify-between text-xs text-gray-400 ">
            <p className="flex flex-col">
              Height
              <span className="font-bold text-black ">{data?.height}</span>
            </p>
            <p className="flex flex-col">
              Weight
              <span className="font-bold text-black ">{data?.weight}</span>
            </p>
            <p className="flex flex-col">
              Experience
              <span className="font-bold text-black ">{data?.experience}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
