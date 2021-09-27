// React
import { useState, useEffect } from "react";

// Styled Components
import styled from "styled-components";

// Material UI
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Framer Motion
import { AnimatePresence } from "framer-motion";

// Components
import NavLogo from "./NavLogo/NavLogo";
import NavLinks from "./NavLinks/NavLinks";
import NavMobileMenu from "./NavMobileMenu/NavMobileMenu";

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    return () => {
      // Removing scrollbar classes so user can scroll after they navigate to another page
      document.body.classList.remove("scrollbar-off");
      document.body.classList.remove("scrollbar-on");
    };
  }, []);

  const mobileMenuHandler = () => {
    setMobileMenu((prev) => !prev);

    if (
      window.innerWidth > document.body.clientWidth ||
      document.body.classList.contains("scrollbar-on")
    ) {
      // User has scrollbar
      document.body.classList.toggle("scrollbar-on");
    } else {
      // User has no scrollbar
      document.body.classList.toggle("scrollbar-off");
    }
  };

  return (
    <Wrapper>
      <NavLogo />
      <NavLinks />

      {!mobileMenu && (
        <MenuIcon className="mobile-menu" onClick={mobileMenuHandler} />
      )}

      {mobileMenu && (
        <CloseIcon className="mobile-menu" onClick={mobileMenuHandler} />
      )}

      <AnimatePresence exitBeforeEnter>
        {mobileMenu && <NavMobileMenu />}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  z-index: 1000;
  padding: 15px 20px;

  //
  width: 1250px;
  @media only screen and (max-width: 1250px) {
    width: 100%;
  }
  //

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .mobile-menu {
    display: none;
    cursor: pointer;
    width: 50px;
    height: 40px;

    @media only screen and (max-width: 1000px) {
      display: block;
    }
  }
`;
