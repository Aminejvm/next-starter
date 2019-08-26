/* eslint-disable react/jsx-filename-extension */
import App from "next/app";
import React from "react";
import { ThemeProvider } from "@xstyled/styled-components";
import Typography from "../commun/Typography";
import theme from "../commun/theme";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <Typography />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}
