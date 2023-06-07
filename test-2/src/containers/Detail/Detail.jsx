//Imports
import { useSelector } from "react-redux";
import { detailData } from "./detailSlice";
import "./Detail.scss";
import { useNavigate } from "react-router-dom";
// import { getUserById } from "../../services/apiCalls";
// import { useState, useEffect } from "react";

const Detail = () => {
  const navigate = useNavigate();
  const selectedUser = useSelector(detailData);
  console.log(selectedUser);

  //Hooks

  //useState
  // const [detail, setDetail] = useState([]);
  // const [user, setUser] = useState([]);


  const returnHome = () => {
    navigate("/");
  };


  // const characterId = selectedUser?.details?.id;

  if (selectedUser !== undefined) {

 
    
    return (
      <div className="">
        <div className="">
          <div>{selectedUser?.id}</div>
          <div className="">{selectedUser?.name}</div>
          <div>{selectedUser?.status}</div>
          <div>{selectedUser?.species}</div>
          <img className="" src={selectedUser?.image} />
        </div>
        <div onClick={() => returnHome()} className="">
          Volver a Home
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>FALLO!</div>
        <button onClick={() => returnHome()}>AQUIBOTON</button>
      </div>
    );
  }
};

export default Detail;
