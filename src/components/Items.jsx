import React from "react";

import kristen from "../assets/avatars/kristen.jpg";
import netflixguy from "../assets/avatars/netflixguy.jpg";
import viejobufa from "../assets/avatars/viejobufa.jpg";
import felipe from "../assets/avatars/felipe.jpg";

const Items = ({ title, excerpt, description, image, amount, total, slug }) => {
  return (
    <li className="item">
      <a href="#" className="box">
        <img className="img-principal" src={`http://localhost:1337${image}`} />
        <h1>{title}</h1>
        <p>{excerpt}</p>
        <div className="objetive">
          <strong>{amount}</strong>/{total}
          <div className="ps-slider">&nbsp;</div>
          <div
            className="ps-perce"
            style={{ width: (amount * 100) / total + "%" }}
          >
            &nbsp;
          </div>
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
