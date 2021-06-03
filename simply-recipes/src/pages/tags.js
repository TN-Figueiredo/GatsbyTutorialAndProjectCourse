import React from "react";
import {graphql, Link} from "gatsby";
import slugify from "slugify";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import setupTags from "../ultis/setupTags";

const tags = ({data}) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes);
  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            return (
              <Link
                key={index}
                to={`/tags/${slugify(text, {lower: true})}`}
                className="tag"
              >
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default tags;
