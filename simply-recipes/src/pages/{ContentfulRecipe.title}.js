import React from "react";
import {graphql, Link} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import slugify from "slugify";
import {BsClockHistory, BsClock, BsPeople} from "react-icons/bs";
import SEO from "../components/SEO";

import Layout from "../components/layout";

const RecipeTemplate = ({
  data: {
    contentfulRecipe: {
      title,
      cookTime,
      content: {tags, ingredients, instructions, tools},
      prepTime,
      servings,
      description: {description},
      image,
    },
  },
}) => {
  return (
    <Layout>
      <SEO title={title} description={description} />
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage
              image={getImage(image)}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings} min.</p>
                </article>
              </div>
              {/* tags */}
              <p className="recipe-tags">
                Tags:
                {tags.map((tag, index) => (
                  <Link key={index} to={`/tags/${slugify(tag, {lower: true})}`}>
                    {tag}
                  </Link>
                ))}
              </p>
            </article>
          </section>
          {/* rest of the content */}
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((instruction, index) => (
                <div key={index} className="single-instruction">
                  <header>
                    <p>step {index + 1}</p>
                    <div></div>
                  </header>
                  <p>{instruction}</p>
                </div>
              ))}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((ingredient, index) => (
                  <p key={index} className="single-ingredient">
                    {ingredient}
                  </p>
                ))}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((tool, index) => (
                  <p key={index} className="single-tool">
                    {tool}
                  </p>
                ))}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: {eq: $title}) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;

export default RecipeTemplate;
