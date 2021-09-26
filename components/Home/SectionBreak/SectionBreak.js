import styled from "styled-components";

const SectionBreak = () => {
  return <Wrapper />;
};

export default SectionBreak;

const Wrapper = styled.div`
  border-top: 1px solid rgba(248, 248, 245, 0.1);

  //
  width: 1000px;
  @media only screen and (max-width: 1000px) {
    width: 95%;
  }
  //
  margin: 50px auto;
`;
