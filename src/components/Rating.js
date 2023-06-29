import Orange from "../assets/images/orangeStar.svg";
import Grey from "../assets/images/greyStar.svg";

function Score({ score }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating_box">
      {stars.map((data, index) =>
        score >= data ? (
          <img
            key={index}
            className="img_box"
            src={Orange}
            alt="étoile orange"
          />
        ) : (
          <img key={index} className="img_box" src={Grey} alt="étoile grise" />
        )
      )}
    </div>
  );
}

export default Score;
