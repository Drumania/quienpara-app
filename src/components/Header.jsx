import React from "react";
import userPhoto from "../assets/avatars/martinperfil.jpg";

const Header = () => {
  return (
    <header>
      <a href="#" className="logo">
        Quien Para
      </a>
      <ul className="menu">
        <li>
          <a href="#" title="ver Todos" className="active">
            Todos
          </a>
        </li>
        <li>
          <a href="#" title="ver Activos">
            Activos
          </a>
        </li>
        <li>
          <a href="#" title="ver Terminados">
            Terminados
          </a>
        </li>
        <li>
          <a href="#" title="ver Archivados">
            Archivados
          </a>
        </li>
      </ul>
      <div className="user-loged">
        <a href="#" className="user">
          <strong>martin</strong>
          <div
            className="user-photo"
            style={{
              backgroundImage: `url(${userPhoto})`,
              backgroundPosition: "center top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            &nbsp;
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
