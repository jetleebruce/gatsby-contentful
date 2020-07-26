import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { motion } from "framer-motion"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

// import Hero from '../components/hero'

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 1px;
  grid-row-gap: 0px;
`

const HeroMainSection = styled(motion.div)`
  background-color: #4b565d;
  display: flex;
  flex-direction: column;
  //   align-items: center;
  justify-content: center;
  h1 {
    color: #bcc0c2;
    margin: 0 auto;
  }
  p {
    color: #bcc0c2;
    margin: 0 auto;
  }
`

const HeroLeftSection = styled.div``

const HeroRightSection = styled.div``

const Post = styled.div`
  display: flex;
`

const PostImage = styled.div`
  flex: 25%;
  margin-right: 1rem;
  width: 15rem;
`

const PostText = styled.div`
  flex: 75%;
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulPost.edges
  const heroTitle = data.contentfulHero.heroImage.title
  const heroImg = data.contentfulHero.heroImage.fluid
  const heroImgRight = data.contentfulNew.pic.fluid

  return (
    <Layout location={location} title={siteTitle}>
      <HeroContainer>
        <HeroMainSection
          // animate={{
          //   x: [70, 120, 90, 0],
          //   y: [-3, -6, -12, 0],
          //   scale: [1, 2, 2, 1],
          //   // rotate: 0,
          // }}
        >
          <motion.h1 animate={{ scale: [1, 1.3, 1.3, 1] }}>
            Vasiliy Khurtin
          </motion.h1>
          <p>Interior Photographer</p>
        </HeroMainSection>
        <HeroLeftSection>
          <p style={{ position: "absolute", zIndex: 10, color: "#bcc0c2" }}>
            {heroTitle}
          </p>
          <Img
            fluid={heroImg}
            objectFit="cover"
            objectPosition="50% 50%"
            style={{ height: "100%" }}
          ></Img>
        </HeroLeftSection>
        <HeroRightSection>
          <p style={{ position: "absolute", zIndex: 10, color: "#bcc0c2" }}>
            {heroTitle}
          </p>
          <Img
            fluid={heroImgRight}
            objectFit="cover"
            objectPosition="50% 50%"
            style={{ height: "100%" }}
          ></Img>
        </HeroRightSection>
      </HeroContainer>

      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        return (
          <Post key={node.slug}>
            <PostImage>
              <Img fluid={node.image.fluid} />
            </PostImage>
            <PostText>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.slug}>
                    {title}
                  </Link>
                </h3>
              </header>
              <section>
                <p>{node.subtitle}</p>
              </section>
            </PostText>
          </Post>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost {
      edges {
        node {
          title
          subtitle
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          author
          slug
        }
      }
    }
    contentfulHero {
      heroTitle
      heroImage {
        title
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulNew {
      pic {
        title
        fluid {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
        }
      }
    }
  }
`
