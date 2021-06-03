import React from "react";
import {graphql} from "gatsby";
import RecipesList from "../components/RecipesList";
import Layout from "../components/layout";
import SEO from "../components/SEO";

const TagTemplate = ({
  data: {
    allContentfulRecipe: {nodes: recipes},
  },
  pageContext: {tag},
}) => {
  return (
    <Layout>
      <SEO title={tag} />
      <main className="page">
        <h2>{tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query GetRecipesFromTags($tag: String) {
    allContentfulRecipe(
      filter: {content: {tags: {eq: $tag}}}
      sort: {fields: title, order: ASC}
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default TagTemplate;
