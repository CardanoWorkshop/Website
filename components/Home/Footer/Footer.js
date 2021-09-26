// Styled Components
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <p className="copyright">© 2021 Cardano Workshop. All rights reserved</p>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  height: 50px;
  width: 100%;
  background-color: #cf0404;

  display: flex;
  justify-content: center;
  align-items: center;
`;
