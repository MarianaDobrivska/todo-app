import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ marginLeft: "250px" }}>
        <Outlet />
      </div>
    </>
  );
};
