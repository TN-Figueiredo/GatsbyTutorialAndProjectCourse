import React from "react";
import {Link} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const RecipesList = ({recipes = []}) => {
  return (
    <div className="recipes-list">
      {recipes.map(({id, title, image, prepTime, cookTime}) => (
        <Link key={id} to={`/${title}`} className="recipe">
          <GatsbyImage
            image={getImage(image)}
            className="recipe-img"
            alt={title}
          />
          <h5>{title}</h5>
          <p>
            Prep: {prepTime} | Cook: {cookTime}min
          </p>
        </Link>
      ))}
    </div>
  );
};

export default RecipesList;
