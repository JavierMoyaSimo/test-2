//Imports
import { useSelector } from "react-redux";
import { detailData } from "./detailSlice";
import "./Detail.scss";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const selectedUser = useSelector(detailData);

  const returnHome = () => {
    navigate("/");
  };

  if (selectedUser?.id !== undefined) {
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
  }
};

export default Detail;
