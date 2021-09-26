// Styled Components
import styled from "styled-components";

// Components
import Nav from "./Nav/Nav";
import Carousel from "./Carousel/Carousel";
import Projects from "./Projects/Projects";
import Mission from "./Mission/Mission";
import Footer from "./Footer/Footer";

import SectionBreak from "./SectionBreak/SectionBreak";

const Home = () => {
  return (
    <Wrapper>
      <Nav />
      <Carousel />
      <SectionBreak />
      <Projects />
      <SectionBreak />
      <Mission />
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
