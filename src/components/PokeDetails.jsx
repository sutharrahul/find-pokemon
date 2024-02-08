import React from "react";

function PokeDetails({ data }) {
  return (
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
  );
}

export default PokeDetails;
