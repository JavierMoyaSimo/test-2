//Imports
import { useSelector } from "react-redux";
import { detailData } from "./detailSlice.js";
import "./Detail.scss";
import { useNavigate } from "react-router-dom";

const Detail = (props) => {
  const navigate = useNavigate();

  //Data from Redux
  const selectedUser = useSelector(detailData);

  const prop = props;
  console.log(prop);

  //FUNCTIONS
  const returnHome = () => {
    navigate("/");
  };

  //RENDER

  if (selectedUser?.id !== undefined) {
    return (
      <div className="view-div">
        <div className="title">{selectedUser?.name}</div>
        <div className="content-detail">
          <ul className="info-detail">
            <div className="detail-li">
              <li>Id -</li> <p>{selectedUser?.id}</p>
            </div>
            <div className="detail-li">
              <li>Name - </li>
              <p>{selectedUser?.name}</p>
            </div>
            <div className="detail-li">
              <li>Status -</li> <p>{selectedUser?.status}</p>
            </div>
            <div className="detail-li">
              <li>Specie - </li>
              <p>{selectedUser?.species}</p>
            </div>
          </ul>
          <div className="img-div">
            <img
              className=""
              src={selectedUser?.image}
              style={{ maxWidth: 300, height: "auto" }}
            />
          </div>
        </div>
        <div
          onClick={() => returnHome()}
          className={prop ? "detail-button toDark" : "detail-button toLight"}
        >
          Home
        </div>
      </div>
    );
  } else {
    return (
      <div className="error-view">
        <div>Sorry, there has been an error</div>
        <button className="error-button" onClick={() => returnHome()}>
          Home
        </button>
      </div>
    );
  }
};

export default Detail;
