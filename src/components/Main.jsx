import React from "react";
import Items from "../components/Items";

//Fake Api
import { api_items } from "../api/api_items";

const Main = () => {
  return (
    <ul className="contents">
      {api_items.map((item) => (
        <Items key={item.id} />
      ))}
    </ul>
  );
};

export default Main;
