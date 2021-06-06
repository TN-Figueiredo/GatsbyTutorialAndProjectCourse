import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import {Link} from "gatsby";

const Categories = () => {
  const {
    allMdx: {distinct: categories},
  } = useStaticQuery(query);
  return (
    <ul>
      {categories.map((category, index) => (
        <li key={index}>
          <Link to={`/${category}`} className="category">
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`;

export default Categories;
