import React from "react";
import App from "next/app";
import { ThemeProvider } from "@xstyled/styled-components";

import theme from "../globalStyles/theme";
import Reset from "../globalStyles/reset";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <Reset />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}

export default MyApp;
