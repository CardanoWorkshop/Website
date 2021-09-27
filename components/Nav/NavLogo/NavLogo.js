// Styled Components
import styled from "styled-components";

// Next
import { useRouter } from "next/router";

const NavLogo = () => {
  const router = useRouter();

  const wrapperHandler = () => {
    router.push("/");
  };

  return (
    <Wrapper onClick={wrapperHandler}>
      <img src="./logo/transparent-logo.png" alt="logo" />
      <p>Cardano Workshop</p>
    </Wrapper>
  );
};

export default NavLogo;

const Wrapper = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;

  img {
    //
    width: 60px;
    @media only screen and (max-width: 1000px) {
      width: 50px;
    }
    //
  }

  p {
    width: min-content;
    margin-left: 10px;

    //
    font-size: 1.7rem;
    line-height: 25px;
    @media only screen and (max-width: 1000px) {
      font-size: 1.25rem;
      line-height: 20px;
    }
    //
  }
`;
