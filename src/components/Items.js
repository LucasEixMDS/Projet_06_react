import { useState, useEffect } from "react";
import { UpOutlined } from "@ant-design/icons";

function Descript({ title, skill }) {
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
    <div className="flex-container">
      <div className="flex-items">
        <h3 className="title-container" key={title}>
          {title}
        </h3>
        <div
          className={`iconContainer ${isTrigger ? "rotate" : ""}`}
          onClick={IconClick}
        >
          <UpOutlined className="icon" />
        </div>
      </div>
      {isTrigger && (
        <p className={`container_info ${visible ? "visible" : ""}`} key={skill}>
          {skill}
        </p>
      )}
    </div>
  );
}

export default Descript;
