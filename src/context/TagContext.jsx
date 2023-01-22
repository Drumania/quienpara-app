import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TagsContext = createContext();

const TagsProvider = (props) => {
  const [tags, setTags] = useState([]);
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    const getTags = async () => {
      let urlExt = "";
      filter !== "Todos" ? (urlExt = `?filter=${filter}`) : (urlExt = ``);

      const url = `http://localhost:1337/api/tags/${urlExt}`;
      const products = await axios.get(url);
      setTags(products.data);
    };
    getTags();
  }, [filter]);

  return (
    <TagsContext.Provider
      value={{
        tags,
        setFilter,
      }}
    >
      {props.children}
    </TagsContext.Provider>
  );
};

export default TagsProvider;
