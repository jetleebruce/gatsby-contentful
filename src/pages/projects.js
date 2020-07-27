import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { motion } from "framer-motion"

const ProjectWrapper = styled.div`
  margin: 0 auto;
`

const Projects = ({ data, location }) => {
  const projects = data.allContentfulPost.edges

  return (
    <ProjectWrapper>
      {projects.map(({ node }) => {
        const title = node.title || node.slug
        return (
          <div key={node.slug}>
            <Img fluid={node.image.fluid} />
          </div>
        )
      })}
    </ProjectWrapper>
  )
}

export default Projects

export const pageQuery = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          id
          title
          subtitle
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
