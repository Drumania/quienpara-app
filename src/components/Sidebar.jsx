import React from "react";

const Sidebar = () => {
  return (
    <aside>
      <a href="#" className="active">
        <span className="material-symbols-outlined">grid_view</span>
      </a>
      <a href="#">
        <span className="material-symbols-outlined">view_agenda</span>
      </a>
      {/* <a href="#">
        <span className="material-symbols-outlined">dashboard_customize</span>
      </a>
      <a href="#">
        <span className="material-symbols-outlined">recent_actors</span>
      </a> */}
    </aside>
  );
};

export default Sidebar;
