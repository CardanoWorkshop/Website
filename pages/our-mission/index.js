// React
import { Fragment } from "react";

// Next
import Head from "next/head";

// Components
import Nav from "../../components/Nav/Nav";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Cardano Workshop | Our mission</title>
        <link rel="icon" href="./logo/transparent-logo.png" />
      </Head>
      <Nav />
      <h1>Our mission</h1>
    </Fragment>
  );
};

export default index;
