import React, { useState, useEffect } from "react";
import Items from "../components/Items";
import axios from "axios";

const Main = () => {
  const [apiData, setApiData] = useState([]);

  // Api

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/items/?populate=*")
      .then((response) => setApiData(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(apiData);

  return (
    <ul className="contents">
      {apiData.map((item) => (
        <Items
          key={item.id}
          title={item.attributes.title}
          excerpt={item.attributes.excerpt}
          description={item.attributes.description}
          image={item.attributes.image.data.attributes.url}
          amount={item.attributes.amount}
          total={item.attributes.total}
          slug={item.attributes.slug}
        />
      ))}
    </ul>
  );
};

export default Main;
