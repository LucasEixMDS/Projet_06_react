import { useState, useEffect } from "react";
import { UpOutlined } from "@ant-design/icons";

function Description({ description }) {
  const [isTrigger, setIsTrigger] = useState(false);

  const IconClick = () => {
    setIsTrigger(!isTrigger);
  };

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isTrigger) {
      setVisible(false);
      setTimeout(() => setVisible(true), 20);
    } else {
      setVisible(false);
    }
  }, [isTrigger]);

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
        <p
          className={`container_info ${visible ? "visible" : ""}`}
          key={description}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default Description;
