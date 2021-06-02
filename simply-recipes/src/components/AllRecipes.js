import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import TagsList from "./TagsList";
import RecipesList from "./RecipesList";

const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

const AllRecipes = () => {
  const {
    allContentfulRecipe: {nodes: recipes},
  } = useStaticQuery(query);

  return (
    <div>
      <div className="recipes-container">
        <TagsList recipes={recipes} />
        <RecipesList recipes={recipes} />
      </div>
    </div>
  );
};

export default AllRecipes;
