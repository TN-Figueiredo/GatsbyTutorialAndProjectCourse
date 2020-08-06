import React from "react"
import Layout from "../components/Layout"
import HeaderStatic from "../examples/HeaderStatic"
import Header from "../examples/Header"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      <div>
        <p>Hello from examples page!</p>
        <Header />
        <HeaderStatic />
        <h5>Author: {author}</h5>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`
export default examples
