import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const Blog = ({ data }) => {
  console.log("blog data", data);
  return (
    <Layout pageTitle="Blog" pageHeading="Blog">
      <ul>
        {data.allFile.nodes.map((node) => {
          return <li key={node.name}>{node.name}</li>;
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export default Blog;
