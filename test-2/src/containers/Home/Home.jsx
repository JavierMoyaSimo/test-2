//Imports

import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  //Hooks

  //useState
  const [users, setUsers] = useState([]);

  //useEffect
  useEffect(() => {
    if (users.length === 0) {
    }
  }, []);

  //RENDER

  if (users.length === 0) {
    return <div></div>;
  } else if (users.length > 0) {
    return( <div>AQUI VAN LOS DATOS A RENDERIZAR</div>);
  }
};

export default Home;
