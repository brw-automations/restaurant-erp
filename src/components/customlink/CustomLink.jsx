import { useResolvedPath, useMatch, Link } from "react-router-dom";

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath({ pathname: to, end: true });
  const isActive = useMatch(resolvedPath.pathname);

  return (
    <Link
      to={to}

      {...props}
      className={isActive ? "active" : ""}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
