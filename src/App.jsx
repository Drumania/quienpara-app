import React from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <Sidebar />
      <div className="container-fluid">
        <Header />
        <Filters />
        <Main />
      </div>
    </>
  );
};

export default App;
