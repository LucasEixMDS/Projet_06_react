import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error404">
      <h2>404</h2>
      <p className="oups">oups! La page que vous demandez n'existe pas.</p>

      <Link to="/">
        <p className="back_home">Retourner sur la page d'acceuil</p>
      </Link>
    </div>
  );
};

export default Error;
