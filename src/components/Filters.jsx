import React, { useState, useEffect } from "react";
import axios from "axios";

const Filters = () => {
  const [apiData, setApiData] = useState([]);

  // Api
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/tags")
      .then((response) => setApiData(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="filters">
      <div className="search">
        <span className="material-symbols-outlined">search</span>
        <input type="text" placeholder="Buscar evento..." />
      </div>
      <div className="categorys">
        {apiData.map((item) => (
          <a href="#" key={item.id}>
            {item.attributes.tag}
          </a>
        ))}
      </div>
      <a href="#">
        <span className="material-symbols-outlined">expand_more</span>
      </a>
    </div>
  );
};

export default Filters;
