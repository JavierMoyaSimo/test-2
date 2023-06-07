import axios from "axios";

//BaseUrl to Ricky Morty api
const dataBase = "https://rickandmortyapi.com/api/character";

export const getUsers = async () => {
  let res = await axios.get(dataBase);
  console.log(res.data.results);
  return res.data.results;
  
};

export const getUserById = async (id) => {
  let res = await axios.get(dataBase + "/" + id);
  console.log(res.data);
  return res.data;
};
