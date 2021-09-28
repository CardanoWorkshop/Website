// React
import { Fragment } from "react";

// Styled Components
import styled from "styled-components";

// Next
import Head from "next/head";

// Components
import Nav from "../../components/Nav/Nav";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Cardano Workshop | Whitepaper</title>
        <link rel="icon" href="./logo/transparent-logo.png" />
      </Head>
      <Nav />
      <Wrapper>
        <h1>Coming soon!</h1>
      </Wrapper>
    </Fragment>
  );
};

export default index;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 25vh;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
  }
`;
