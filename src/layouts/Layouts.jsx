import React from "react";
import Tab from "../components/Tab";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div className="overflow-hidden">
        
      <div className="absolute left-1/2 -translate-x-1/2 pt-4 z-10">
        <a target="_blank" href="">Tabs Transition</a>
      </div>

      <Tab />
      <Outlet />
      
    </div>
  );
};

export default Layouts;
