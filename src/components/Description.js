import { useState } from "react";
import { UpOutlined } from "@ant-design/icons";

function Description({ description }) {
  const [isTrigger, setIsTrigger] = useState(false);

  const IconClick = () => {
    setIsTrigger(!isTrigger);
  };

  return (
    <div className="descript_container">
      <div className="descript_items">
        <h3 className="descript_title_container"> Description </h3>
        <div
          className={`iconContainer ${isTrigger ? "rotate" : ""}`}
          onClick={IconClick}
        >
          <UpOutlined className="icon" />
        </div>
      </div>
      {isTrigger && (
        <p className="container_info" key={description}>
          {description}
        </p>
      )}
    </div>
  );
}

export default Description;
