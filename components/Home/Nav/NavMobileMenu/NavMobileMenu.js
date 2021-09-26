// Styled Components
import styled from "styled-components";

// Overlay
import Overlay from "../../../Overlay/Overlay";

// Material UI
import Button from "@mui/material/Button";

// Next
import Link from "next/link";

// Framer Motion
import { motion } from "framer-motion";

// Framer Motion Variables
const wrapperVariants = {
  hidden: { x: "100%" },
  visible: { x: "0%" },
};

const NavMobileMenu = () => {
  return (
    <Overlay>
      <Wrapper
        variants={wrapperVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.125 }}
      >
        <ul>
          <li>
            <Link href="/">
              <a>ABOUT US</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>OUR MISSION</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>RESOURCES</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>NEWS</a>
            </Link>
          </li>
          <li>
            <a href="https://cardano.org/" target="_blank" rel="noreferrer">
              <Button variant="contained">Cardano.org</Button>
            </a>
          </li>
        </ul>
      </Wrapper>
    </Overlay>
  );
};

export default NavMobileMenu;

const Wrapper = styled(motion.div)`
  position: fixed;
  margin-top: 80px;
  padding-top: 50px;
  z-index: 100;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #000;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    list-style-type: none;
    font-size: 1.25rem;

    li {
      font-weight: 600;
      a {
        text-decoration: none;
        color: #fff;
        transition: all 0.2s ease-in-out 0s;

        &:hover {
          color: #cf0404;
        }
      }

      button {
        background-color: #cf0404;
        padding: 0 12.5px;
        height: 30px;
        width: 150px;

        display: flex;
        align-items: center;

        &:hover {
          background-color: rgba(207, 4, 4, 0.9);
        }
      }
    }
  }
`;
