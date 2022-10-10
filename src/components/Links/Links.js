import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RouteContext } from "../Header/Header";

const Links = ({ className }) => {
  const router = useContext(RouteContext);
  return (
    <ul className={className}>
      {router.map((route) => (
        <Link key={route.id} className="mr-4 font-semibold" to={route.path}>
          {route.name}
        </Link>
      ))}
    </ul>
  );
};

export default Links;
