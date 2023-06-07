//Imports
import { useSelector, useDispatch } from "react-redux";
import {detailData, addDetail} from '../Detail/detailSlice';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import { getUsers } from "../../services/apiCalls";

const Home = () => {
  const navigate = useNavigate();
  const detailsFromRdx = useSelector(detailData);

  const dispatch = useDispatch();

  //Hooks

  //useState
  const [users, setUsers] = useState([]);

  //useEffect
  useEffect(() => {
    if (users.length === 0) {
      getUsers()
        .then((users) => {
          setUsers(users);
        })
        .catch((error) => console.error(error));
    }
  }, [users.length]);

  //FUNCTIONS
  const returnHome = () => {
    navigate("/");
  };

  const clickedUser = (user) => {
    dispatch(addDetail({ ...user, details: user }));
    setTimeout(() => {
      navigate("/detail");
    }, 750);
  };

  //RENDER

  if (users.length === 0) {
    return <div>AQUI NO VA NADA!</div>;
  } else if (detailsFromRdx.details.length > 0) {
    return (
      <div className="">
        ESTOY AQUI2!
        {detailsFromRdx.details.map((user, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                clickedUser(user);
              }}
              className=""
            >
              <div>{user.id}</div>
              <div>{user.name}</div>
              <div>{user.status}</div>
              <div>{user.species}</div>
              <div>{user.image}</div>
            </div>
          );
        })}
        <div onClick={() => returnHome()}>Volver a home</div>
      </div>
    );
  } else {
    return (
      <div className="">
        {" "}
        ESTOY AQUI3!
        {users.map((user, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                clickedUser(user.id);
              }}
              className=""
            >
              <div>{user.id}</div>
              <div>{user.name}</div>
              <div>{user.status}</div>
              <div>{user.species}</div>
              <div>{user.image}</div>
            </div>
          );
        })}
        <div onClick={() => returnHome()}>Volver a home</div>
      </div>
    );
  }
};

export default Home;
