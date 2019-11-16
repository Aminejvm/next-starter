import React from "react";
import Head from "next/head";
import styled from "@xstyled/styled-components";

import Nav from "../components/nav";

const Box = styled.divBox`
  width: 200px;
  height: 200px;
  background-color: primary400;
`;
const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Nav />
    <Box />
  </div>
);

export default Home;
