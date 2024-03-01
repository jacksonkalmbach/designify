import { useLocation, useNavigate } from "react-router-dom";
import {
  NavBarContainer,
  StyledLinksContainer,
  StyledNavLinkContainer,
} from "./Styles";

import Logo from "../Logo";
import SearchBar from "../SearchBar";
import Button from "../Button";

const HOME_NAVLINKS: { title: string; path: string }[] = [
  {
    title: "Inspiration",
    path: "inspiration",
  },
  {
    title: "Create",
    path: "create",
  },
  {
    title: "Pricing",
    path: "pricing",
  },
  {
    title: "For Designers",
    path: "designers",
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <NavBarContainer>
      <Logo variant="navbar" />
      <StyledLinksContainer>
        {pathname === "/" ? (
          HOME_NAVLINKS.map((link) => (
            <NavLink key={link.title} title={link.title} path={link.path} />
          ))
        ) : (
          <></>
        )}
        {pathname === "/" && (
          <Button
            text="Login"
            variant="primary"
            onClick={() => navigate("/auth")}
          />
        )}
      </StyledLinksContainer>

      {pathname === "/inspiration" && (
        <>
          <NavLink title="Create" path="create" />
          <SearchBar />
        </>
      )}
    </NavBarContainer>
  );
};

const NavLink = ({ title, path }: { title: string; path: string }) => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(`${path}`);
  };
  return (
    <StyledNavLinkContainer key={title} onClick={() => handleClick(path)}>
      {title}
    </StyledNavLinkContainer>
  );
};

export default Navbar;
