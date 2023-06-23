import { useState } from "react";
import { UpOutlined } from "@ant-design/icons";

function Descript({ title, skill }) {
  const [isTrigger, setIsTrigger] = useState(false);

  const IconClick = () => {
    setIsTrigger(!isTrigger);
  };

  return (
    <div className="flex-container">
      <div className="flex-items">
        <h3 className="title-container" key={title}>
          {title}
        </h3>
        <div
          className={`iconContainer ${isTrigger ? "" : "rotate"}`}
          onClick={IconClick}
        >
          <UpOutlined className="icon" />
        </div>
      </div>
      {isTrigger && (
        <p className="container_info" key={skill}>
          {skill}
        </p>
      )}
    </div>
  );
}

export default Descript;
