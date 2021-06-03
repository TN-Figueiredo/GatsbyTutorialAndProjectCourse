import React, {useState} from "react";
import Title from "./Title";
import {FaAngleDoubleRight} from "react-icons/fa";
import {graphql, useStaticQuery} from "gatsby";
import {Link} from "gatsby";

export const query = graphql`
  {
    allStrapiJob(sort: {fields: created_at, order: DESC}) {
      nodes {
        position
        company
        date
        desc {
          id
          name
        }
      }
    }
  }
`;

const Jobs = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiJob: {nodes: jobs},
  } = data;
  const [value, setValue] = useState(0);
  const {company, position, date, desc} = jobs[value];

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map(({company}, index) => (
            <button
              key={index}
              className={index === value ? "job-btn active-btn" : "job-btn"}
              onClick={() => setValue(index)}
            >
              {company}
            </button>
          ))}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(({id, name}) => (
            <div key={id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{name}</p>
            </div>
          ))}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  );
};

export default Jobs;
