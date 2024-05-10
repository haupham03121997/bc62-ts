import React from "react";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div>
      <p>Header</p>
      <Outlet />
      <p>Footer</p>
    </div>
  );
}
