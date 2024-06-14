import React from "react";
import { Outlet } from "react-router-dom";
import Admin from "./Admin";

const HomeLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
