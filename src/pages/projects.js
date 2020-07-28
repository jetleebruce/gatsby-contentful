import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { motion } from "framer-motion"

const ProjectWrapper = styled.div`
  margin: 0 auto;
`

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 1px;
  grid-row-gap: 0px;
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 3.5rem;
`

const Projects = ({ data, location }) => {
  const projects = data.allContentfulPost.edges

  return (
    <ProjectWrapper>
      <HeaderWrapper>
        {projects.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <div key={node.slug}>
              <Img fluid={node.image.fluid} />
            </div>
          )
        })}
      </HeaderWrapper>
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
