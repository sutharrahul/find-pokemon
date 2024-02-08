import React from "react";

function PokeImg({ imageUrl }) {
  return (
    <div className="pt-1 mx-auto -mt-28 text-center">
      <img
        alt="profil"
        src={imageUrl}
        className="mx-auto object-cover h-full w-full "
      />
    </div>
  );
}

export default PokeImg;
