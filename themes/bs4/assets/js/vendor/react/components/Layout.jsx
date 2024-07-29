import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Link to="/shop/details">Product Details</Link>

      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;
