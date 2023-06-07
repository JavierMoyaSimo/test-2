//Imports
import { useSelector } from "react-redux";
import { detailData } from "./detailSlice";
import "./Detail.scss";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const selectedUser = useSelector(detailData);

  //FUNCTIONS
  const returnHome = () => {
    navigate("/");
  };

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
        <div onClick={() => returnHome()} className="">
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
