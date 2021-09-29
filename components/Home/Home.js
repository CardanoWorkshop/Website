// Styled Components
import styled from "styled-components";

// React Reveal
import Fade from "react-reveal/Fade";

// Components
import Nav from "../Nav/Nav";
import Carousel from "./Carousel/Carousel";
import Projects from "./Projects/Projects";
import Socials from "./Socials/Socials";
import Mission from "./Mission/Mission";
import Footer from "./Footer/Footer";

import Background from "./Background/Background";
import SectionBreak from "./SectionBreak/SectionBreak";

const Home = () => {
  return (
    <Wrapper>
      <Background />
      <Nav />
      <Carousel />
      <SectionBreak />
      <Fade>
        <Projects />
      </Fade>
      <SectionBreak />
      <Fade>
        <Mission />
      </Fade>
      <SectionBreak />
      <Fade>
        <Socials />
      </Fade>
      <SectionBreak />
      <Footer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  background-color: #1c0000;
  color: #fff;
`;
