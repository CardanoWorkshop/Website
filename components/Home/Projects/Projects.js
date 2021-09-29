// Styled Components
import styled from "styled-components";

// Components
import Project from "./Project/Project";

const Projects = () => {
  return (
    <Wrapper>
      <Project
        image={"./logo/filled-logo.png"}
        title={"NFT Marketplace"}
        main={"[Q4 2021]"}
        link={"https://cardano.org/"}
      />
      <Project
        image={
          "./logo/filled-logo.png"
        }
        title={"MINT NFT"}
        main={"[Q4 2021]"}
        link={"https://cardano.org/"}
      />
      <Project
        image={
          "./logo/filled-logo.png"
        }
        title={"Workswap DEX"}
        main={"[Q1 2021]"}
        link={"https://cardano.org/"}
      />
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
`;
