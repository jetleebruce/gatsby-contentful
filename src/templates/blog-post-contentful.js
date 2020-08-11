import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"


const PostWrapper = styled.div`
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

  @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 1px;
  }

  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 1px;
  }

  // @media (max-width: 991.98px) {
  //   grid-template-columns: 1fr 1fr;
  //   grid-template-rows: 1fr;
  //   grid-column-gap: 1px;
  // }
`

const HeaderTextWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    align-items: center;
    font-family: Montserrat, sans-serif;
  }
`
const ImageHeaderWrapper = styled.div``

const GalleryWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1170px) {
    max-width: 1170px;
  }
`
const ImageGalleryWrapper = styled.div`
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
  max-width: 90%;
`

const BlogPostContentfulTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulPost
  const siteTitle = data.site.siteMetadata.title
  // const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.title} description={post.subtitle} />
      <PostWrapper>
        <HeaderWrapper>
          <HeaderTextWrapper>
            <h1>{post.title}</h1>
            <section
              dangerouslySetInnerHTML={{
                __html: post.content.childContentfulRichText.html,
              }}
            />
          </HeaderTextWrapper>
          <ImageHeaderWrapper>
            <Img fluid={post.image.fluid} />
          </ImageHeaderWrapper>
        </HeaderWrapper>

        <GalleryWrapper>
          <div>
            {post.pics.map((img, i) => {
              return (
                <ImageGalleryWrapper style={{ marginBottom: "15px" }}>
                  <Img
                    key={i}
                    fluid={img.fluid}
                    alt={img.title}
                    objectFit="cover"
                    objectPosition="50% 50%"
                  />
                </ImageGalleryWrapper>
              )
            })}
          </div>
        </GalleryWrapper>
      </PostWrapper>
    </Layout>
  )
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
         query ContentfulBlogPostBySlug($slug: String!) {
           site {
             siteMetadata {
               title
             }
           }
           contentfulPost(slug: { eq: $slug }) {
             title
             subtitle
             image {
               fluid {
                 ...GatsbyContentfulFluid_withWebp
               }
             }
             pics {
               title
               fluid {
                 ...GatsbyContentfulFluid_withWebp
               }
             }
             content {
               childContentfulRichText {
                 html
               }
             }
           }
         }
       `
