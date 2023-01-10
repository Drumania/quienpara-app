import React from "react";

const Filters = () => {
  return (
    <div className="filters">
      <div className="search">
        <span className="material-symbols-outlined">search</span>
        <input type="text" placeholder="Buscar evento..." />
      </div>
      <div className="categorys">
        <a href="#">Fútbol</a>
        <a href="#">Padel</a>
        <a href="#">Hockey Femenino</a>
        <a href="#">Cine</a>
        <a href="#">Boliche</a>
        <a href="#">Mates</a>
        <a href="#">Tennis</a>
        <a href="#">Barcito</a>
        <a href="#">Plaza</a>
      </div>
      <a href="#">
        <span className="material-symbols-outlined">expand_more</span>
      </a>
    </div>
  );
};

export default Filters;
