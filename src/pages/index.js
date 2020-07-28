import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Behance from "../images/behance.svg"
import Cover from "../images/space.jpg"

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  grid-template-rows: 1fr;
  // grid-column-gap: 1px;
  grid-row-gap: 0px;
`

const HeroMainSection = styled(motion.div)`
  background-color: #4b565d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: #bcc0c2;
    margin: 0 auto;
    padding-bottom: 1rem;
    font-family: "Lato", serif;
  }
  p {
    color: #bcc0c2;
    margin: 0 auto;
    font-family: "Lato", serif;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 1rem;
  }
`

const HeroLeftSection = styled(motion.div)``

const HeroRightSection = styled(motion.div)``

// Section with Magazin cover

const SectionMagazinWrapper = styled.div`
margin: : 0 auto;
padding: 5rem 5rem;
margin-top: 1.5rem;
display: flex;
flex-direction: column;
`

const MagazinImageWrapper = styled.div`
  margin: 0 auto;
  margin-top: 1.5rem;
`

const MagazinTextWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  span {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 300;
    justify-content: center;
  }
  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 700 bold;
    text-transform: uppercase;
    font-size: 2.5rem;
  }
`

// Section with Posts (title, image)

const SectionWrapper = styled.div`
  margin: : 0 auto;
  padding: 2rem 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  // grid-column-gap: 1px;
  grid-row-gap: 0px;
`

const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 25rem;
`

const Post = styled.div``

const PostImage = styled.div`
  // flex: 25%;
  margin-right: 1rem;
  // width: 25rem;
  position: relative;
`

const PostText = styled.div`
  // flex: 75%;
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulPost.edges
  const heroImg = data.contentfulHero.heroImage.fluid
  const heroImgRight = data.contentfulNew.pic.fluid

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Vasiliy Khurtin" />
      <HeroContainer>
        <HeroMainSection
          animate={{
            x: [-550, -300, -200, 0],
            opacity: [0.1, 0.3, 0.5, 1],
          }}
        >
          <motion.h1
            animate={{ scale: [0, 0, 1.1, 1], opacity: [0.1, 0.3, 0.5, 1] }}
            transition={{ duration: 2, ease: "linear" }}
          >
            Vasiliy Khurtin
          </motion.h1>
          <motion.p
            animate={{ opacity: [0, 0, 0, 1] }}
            transition={{ duration: 3, ease: "linear" }}
          >
            Architecture / Food / Interior Photographer
          </motion.p>
          <motion.div
            animate={{ opacity: [0, 0, 0, 1] }}
            transition={{ duration: 4, ease: "linear" }}
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to="https://www.behance.net/vshrt">
              <img src={Behance} style={{ width: "2rem" }}></img>
            </Link>
          </motion.div>
        </HeroMainSection>
        <HeroLeftSection
          animate={{
            y: [-950, -700, -500, 0],
            opacity: [0, 0, 0, 1],
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1.2, ease: "linear" }}
          layoutTransition
        >
          {/* <p style={{ position: "absolute", zIndex: 10, color: "#bcc0c2" }}>
            {heroTitle}
          </p> */}
          <Img
            fluid={heroImg}
            objectFit="cover"
            objectPosition="50% 50%"
            style={{ height: "100%", position: "relative" }}
          ></Img>
        </HeroLeftSection>
        <HeroRightSection
          animate={{
            y: [950, 700, 500, 0],
            opacity: [0, 0, 0, 1],
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1.2, ease: "linear" }}
        >
          {/* <p style={{ position: "absolute", zIndex: 10, color: "#bcc0c2" }}>
            {heroTitle}
          </p> */}
          <Img
            fluid={heroImgRight}
            objectFit="cover"
            objectPosition="50% 50%"
            style={{
              height: "100%",
              position: "relative",
              overflowX: "hidden",
            }}
          ></Img>
        </HeroRightSection>
      </HeroContainer>

      <SectionMagazinWrapper>
        <MagazinTextWrapper>
          <h2>Фото для обложки журнала #ПР92</h2>
          <span> Кафе «Космос» на ВДНХ</span>
        </MagazinTextWrapper>
        <MagazinImageWrapper>
          <img src={Cover} style={{ height: "42rem" }}></img>
        </MagazinImageWrapper>
      </SectionMagazinWrapper>

      <SectionWrapper>
        
          {posts.map(({ node }) => {
            const title = node.title || node.slug
            return (
              <Post key={node.slug}>
                <PostImage>
                  <Img fluid={node.image.fluid}></Img>
                  <p>Hello</p>
                </PostImage>
                <PostText>
                  <h3>
                    <Link style={{ boxShadow: `none` }} to={node.slug}>
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
        
      </SectionWrapper>
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
          id
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
