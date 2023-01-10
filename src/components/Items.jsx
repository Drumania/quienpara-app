import React from "react";

import futbol from "../assets/items/futbol.jpg";

import kristen from "../assets/avatars/kristen.jpg";
import netflixguy from "../assets/avatars/netflixguy.jpg";
import viejobufa from "../assets/avatars/viejobufa.jpg";
import felipe from "../assets/avatars/felipe.jpg";

const Items = () => {
  return (
    <li className="item">
      <a href="#" className="box">
        <img className="img-principal" src={futbol} />
        <h1>Futbol en saavedra</h1>
        <p>
          Jugamos el martes a las 22hs en las canchas del parque saavedra, somos
          4 de 30+ asique no corremos mucho.
        </p>
        <div className="objetive">
          <strong>1</strong>/10
          <div className="ps-slider">&nbsp;</div>
          <div className="ps-perce">&nbsp;</div>
        </div>
        <div className="footer">
          <span>Faltan 3 días</span>
          <div className="users-pic">
            <img src={kristen} alt="kristen" title="kristen" />
            <img src={netflixguy} alt="netflixguy" title="netflixguy" />
            <img src={viejobufa} alt="viejobufa" title="viejobufa" />
            <img src={felipe} alt="felipe" title="felipe" />
          </div>
        </div>
      </a>
    </li>
  );
};

export default Items;
