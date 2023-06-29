import { useState } from "react";
import ArrowRight from "../assets/images/arrowRight.svg";
import ArrowLeft from "../assets/images/arrowLeft.svg";

function Carousel({ Picture }) {
  const [isExpose, setIsExpose] = useState(0);

  const previousSlide = () => {
    const firstPicture = isExpose === 0;
    const newIndex = firstPicture ? Picture.length - 1 : isExpose - 1;
    setIsExpose(newIndex);
  };

  const nextSlide = () => {
    const lastPicture = isExpose === Picture.length - 1;
    const newIndex = lastPicture ? 0 : isExpose + 1;
    setIsExpose(newIndex);
  };

  return isExpose === 0 && 1 === Picture.length ? (
    <section
      className="carousel_photo"
      style={{ backgroundImage: `url(${Picture[isExpose]})` }}
    ></section>
  ) : (
    <section
      className="carousel_photo"
      style={{ backgroundImage: `url(${Picture[isExpose]})` }}
    >
      <div className="carousel_arrow">
        <div className="carousel_arrow_left">
          <img src={ArrowLeft} alt="flèche de gauche" onClick={previousSlide} />
        </div>
        <div className="carousel_arrow_right">
          <img src={ArrowRight} alt="flèche de droite" onClick={nextSlide} />
        </div>
      </div>
      <div className="carousel_number">
        <p>
          {isExpose + 1}/{Picture.length}
        </p>
      </div>
    </section>
  );
}

export default Carousel;
