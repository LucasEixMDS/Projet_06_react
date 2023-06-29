import { useState } from "react";
import { UpOutlined } from "@ant-design/icons";

function Equipement({ equipments }) {
  const [isTrigger, setIsTrigger] = useState(false);

  const IconClick = () => {
    setIsTrigger(!isTrigger);
  };

  return (
    <div className="descript_container">
      <div className="descript_items">
        <h3 className="descript_title_container"> Équipements </h3>
        <div
          className={`iconContainer ${isTrigger ? "rotate" : ""}`}
          onClick={IconClick}
        >
          <UpOutlined className="icon" />
        </div>
      </div>
      {isTrigger && (
        <ul>
          {equipments.map((equipment, index) => (
            <li className="descript_infos" key={index}>
              {equipment}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Equipement;
