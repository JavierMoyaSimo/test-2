//Imports

import "./Detail.scss";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate("/");
  };

  return (
    <div className="">
      <div className="">
        <div className="">
          {ID}
          <img className="" src={IMG} />
          <div onClick={() => returnHome()} className="">
            Volver a Home
          </div>
        </div>
        <div className="">{Description}</div>
      </div>
    </div>
  );
};

export default Detail;
