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
import UserCard from "../UserCard";

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
];

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const user = localStorage.getItem("designify_user");
  const userObj = user ? JSON.parse(user) : null;

  return (
    <NavBarContainer>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <StyledHambugerMenu>
          <MdMenu size={30} />
        </StyledHambugerMenu>
        <Logo variant="navbar" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <StyledLinksContainer>
          {pathname === "/" ? (
            HOME_NAVLINKS.map((link) => (
              <NavLink key={link.title} title={link.title} path={link.path} />
            ))
          ) : (
            <></>
          )}
        </StyledLinksContainer>
        {pathname === "/" || pathname === "/pricing" ? (
          userObj ? (
            <UserCard
              name={userObj.firstName}
              username={userObj.username}
              variant="small"
              size="large"
              handleClick={() => {}}
            />
          ) : (
            <div style={{ width: "100px" }}>
              <Button
                text="Login"
                variant="primary"
                onClick={() => navigate("/auth")}
              />
            </div>
          )
        ) : (
          <></>
        )}
      </div>

      {pathname !== "/" && (
        <>
          <>
            <NavLink title="Inspiration" path="/inspiration" />
            <NavLink title="Create" path="/create" />
          </>

          <StyledSearchContainer>
            <SearchBar />
          </StyledSearchContainer>

          <UserCard
            name="Jackson Kalmbach"
            username="jacksonkalmbach"
            variant="small"
            size="large"
            handleClick={() => navigate(`${userObj.username}`)}
          />
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
