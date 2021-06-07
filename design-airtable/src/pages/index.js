import React from "react";
import {graphql} from "gatsby";
import {Layout, Hero, About, Survey, Slider, GridProjects} from "../components";

const HomePage = ({
  data: {
    allAirtable: {nodes: projects},
    customers: {nodes: customers},
  },
}) => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <GridProjects projects={projects} title="latest projects" />
        <Survey />
        <Slider customers={customers} />
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    allAirtable(
      filter: {table: {eq: "Projects"}}
      limit: 3
      sort: {fields: data___date, order: DESC}
    ) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
    customers: allAirtable(filter: {table: {eq: "Customers"}}) {
      nodes {
        data {
          name
          quote
          title
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  height: 150
                  placeholder: TRACED_SVG
                )
              }
            }
          }
        }
        id
      }
    }
  }
`;

export default HomePage;
