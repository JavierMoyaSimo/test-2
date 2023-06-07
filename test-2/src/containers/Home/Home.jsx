//Imports
import { useDispatch } from "react-redux";
import { addDetail } from "../Detail/detailSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import { getUsers } from "../../services/apiCalls";

const Home = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Value of props
  const prop = props;

  //HOOKS

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

  //NO HACE FALTA
  // const [propValue, setPropValue] = useState(true);

  // useEffect(() => {
  //   if (props !== propValue) {
  //     setPropValue(props);
  //   }
  // }, [props]);

  //FUNCTIONS

  const clickedUser = (user) => {
    dispatch(addDetail({ ...user, details: user }));

    setTimeout(() => {
      navigate("/detail");
    }, 750);
  };

  //RENDER

  if (users) {
    return (
      <div
        className={
          prop.lightNight
            ? "dark-mode total-width  "
            : "light-mode total-width  "
        }
      >
        <div
          className={
            prop.lightNight
              ? "dark-mode container table"
              : "light-mode container table"
          }
        >
          <div className="flex header">
            <div className=" width-max">ID</div>
            <div className="width-max">Name</div>
            <div className="width-max">Status</div>
            <div className="width-max">Species</div>
            <div className="width-max">Face</div>
          </div>

          {users.map((user) => (
            <>
              <div key={user.id} className="flex">
                <div className="width-max">{user.id}</div>
                <div className="width-max">{user.name}</div>
                <div className="width-max">{user.status}</div>
                <div className="width-max">{user.species}</div>
                <div className="width-max opacity">
                  <img
                    onClick={() => {
                      clickedUser(user);
                    }}
                    src={user.image}
                    alt={user.name}
                    style={{ maxWidth: 60, height: "auto", cursor: "pointer" }}
                  />
                </div>
              </div>
              <hr />
            </>
          ))}
        </div>
      </div>
    );
  }
};

export default Home;
