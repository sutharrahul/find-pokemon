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
    moves: data?.moves?.map((item) => item?.move?.name)?.slice(0, 6),
    types: data?.types?.map((item) => item?.type?.name)?.slice(0, 3),
    experience: data?.base_experience,
  };
}

const creatSearchUrl = (name) => `https://pokeapi.co/api/v2/pokemon/${name}`;

export async function fetchPokemonDataByName(name) {
  const res = await axios.get(creatSearchUrl(name));
  return res.data;
}

// function fetchPokemonData() {
//   new Promise((resolve, reject) => {
//     axios
//       .get("https://pokeapi.co/api/v2/pokemon/")
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }
