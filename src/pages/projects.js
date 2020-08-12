import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

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

  @media (max-width: 991.98px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`
const Post = styled.div`
  position: relative;
  margin-bottom: 2rem;
`

const PostImage = styled.div`
  // flex: 25%;
  margin-right: 1rem;
  // width: 25rem;
  position: relative;
`
const PostText = styled.div`
  // flex: 75%;
  position: absolute;
  top: 0;
  margin: 2.5rem;
 
  h3 a {
    color: white;
    font-size: 2.5rem;  
    margin-bottom: 0;
    background-color: darkblue;
    font-family: Montserrat,sans-serif;
  }

  p {
    color: white;
    background-color: darkblue;
    font-family: Montserrat,sans-serif;
  }

  @media (max-width: 575.98px){
    margin: 0.5rem;

    h3{
      margin-bottom: 0.5rem;
    }
    
h3 a {
  font-size: 1.2rem;
}

p{
  font-size: 0.8rem;
}
  }
  }
`

const Projects = ({ data, location }) => {
  return (
    <ProjectWrapper>
      <HeaderWrapper>
        {data.allContentfulPost.edges.map(({ node }) => {
          const title = node.title || node.slug
          console.log(node.slug)
          return (
            <Post key={node.slug}>
              <PostImage>
                <Img fluid={node.image.fluid} />
              </PostImage>
              <PostText>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={`/${node.slug}`}>
                    {title}
                  </Link>
                </h3>

                <section>
                  <p>{node.subtitle}</p>
                </section>
              </PostText>
            </Post>
          )
        })}
      </HeaderWrapper>
    </ProjectWrapper>
  )
}

export default Projects

export const pageQuery = graphql`
         query {
           allContentfulPost(limit: 4) {
             edges {
               node {
                 id
                 title
                 subtitle
                 image {
                   fluid(maxWidth: 1000) {
                     ...GatsbyContentfulFluid_withWebp
                   }
                 }
                 slug
               }
             }
           }
         }
       `
