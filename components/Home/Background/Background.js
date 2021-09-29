// Styled Components
import styled from "styled-components";

// Particles
import Particles from "react-particles-js";

// Config
import config from "./config";

const Background = () => {
  return <Wrapper params={config} />;
};

export default Background;

const Wrapper = styled(Particles)`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  opacity: 0.5;
`;
