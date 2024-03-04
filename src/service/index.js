import axios from "axios";

export async function fetchPokemonData(apiUrl) {
  const res = await axios.get(apiUrl);
  return res.data;
}

export function extractPokeInfo(data) {
  return {
    height: data?.height,
    weight: data?.weight,
    name: data?.name,
    image: data?.sprites?.other?.home?.front_default,
    abilities: data?.abilities?.map((item) => item?.ability?.name).slice(0, 3),
    moves: data?.moves?.map((item) => item?.move?.name)?.slice(0, 10),
    types: data?.types?.map((item) => item?.type?.name)?.slice(0, 3),
    experience: data?.base_experience,
  };
}

const creatSearchUrl = (name) =>
  `https://pokeapi.co/api/v2/pokemon/${name?.toLowerCase()}`;

export async function fetchPokemonDataByName(name) {
  try {
    const res = await axios.get(creatSearchUrl(name));
    return {
      data: extractPokeInfo(res?.data),
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      errorMessage:
        error?.response?.data || error?.message || "Somthing went wrong",
    };
  }
}

// function fetchPokemonData() {
//   new Promise((resolve, reject) => {
//     axios
//       .get("https://pokeapi.co/api/v2/pokemon/")
//         resolve(res.data);
//       })
//       .catch((err) => {
//         reject(err);
//       .then((res) => {
//       });
//   });
// }
