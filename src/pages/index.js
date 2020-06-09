import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <div>
      <h1>Blog</h1>
    </div>
    {
      data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h2>{ node.frontmatter.title }</h2>
          <p>{ node.excerpt }</p>
        </div>
      ))
    }
  </Layout>
)

export const query = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        frontmatter {
          title
          date
        }
        id
        html
        fields{
          slug
        }
        excerpt
      }
    }
  }
}    
`
