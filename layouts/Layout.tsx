import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Portfolio" }: Props) => (
  <div className="text-gray-600 body-font">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
