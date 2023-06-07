import axios from "axios";

//BaseUrl to Ricky Morty api
const dataBase = "https://rickandmortyapi.com/api/character";

export const getUsers = async () => {
  let res = await axios.get(dataBase);
  console.log(res.results);
  return res.results;
};

export const getUserById = async (id) => {
  let res = await axios.get(dataBase + id);

  console.log(res.results);
  return res;
};
