import React from "react";
import {graphql} from "gatsby";
import Title from "../components/Title";
import Seo from "../components/Seo";

const About = ({
  data: {
    strapiAbout: {
      title,
      image: {publicURL},
      info,
      stack,
    },
  },
}) => {
  return (
    <>
      <section className="about-page">
        <div className="section-center about-center">
          <img className="about-img-svg" src={publicURL} alt={title} />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(({id, title}) => (
                <span key={id}>{title}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export const query = graphql`
  {
    strapiAbout {
      title
      info
      stack {
        id
        title
      }
      image {
        publicURL
      }
    }
  }
`;

export default About;
