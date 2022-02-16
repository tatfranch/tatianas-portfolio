import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const Homepage = () => {
  return (
    <>
      <Layout pageTitle="Home" pageHeading="This is my portfolio">
        <p>Welcome to my cool site.</p>
        <StaticImage
          src="https://images.unsplash.com/photo-1492998680170-81f8863d8d2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80"
          alt="Japanese lamps"
        />
        {/* <StaticImage src="../images/Timisito.jpg" alt="cat illustration" /> */}
      </Layout>
    </>
  );
};

export default Homepage;
