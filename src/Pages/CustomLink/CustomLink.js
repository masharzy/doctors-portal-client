import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
      <Link
        // className={match ? "btn" : "btn btn-ghost"}
        style={{backgroundColor: match ? "#3A4256" : "white", color: match ? "white" : "#000000"}}
        to={to}
        {...props}
      >
        {children}
      </Link>
  );
};

export default CustomLink;
