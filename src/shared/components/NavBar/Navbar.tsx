import { useLocation, useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import {
  NavBarContainer,
  StyledHambugerMenu,
  StyledLinksContainer,
  StyledNavLinkContainer,
  StyledSearchContainer,
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
          <div style={{ width: "100px" }}>
            <Button
              text="Login"
              variant="primary"
              onClick={() => navigate("/auth")}
            />
          </div>
        )}
      </StyledLinksContainer>
      <StyledHambugerMenu>
        <MdMenu size={30} />
      </StyledHambugerMenu>

      {pathname === "/inspiration" && (
        <StyledSearchContainer>
          <SearchBar />
        </StyledSearchContainer>
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
