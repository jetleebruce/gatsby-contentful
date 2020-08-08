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
  display: flex;
  // flex-direction: row;

  // grid-template-columns: 1.5fr 1fr 1fr;
  // grid-template-rows: 1fr;
  // // grid-column-gap: 1px;
  // // grid-row-gap: 0px;
  // grid-auto-flow: row dense

  @media (max-width: 575.98px) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
  }

  @media (max-width: 767.98px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
  @media (max-width: 991.98px) {
    flex-direction: column;
    flex-wrap: wrap;
    height: 100vh;
  }
  @media (max-width: 1199.98px) {
    width: 100%;
    height: 100vh;
    flex-direction: row;
  }
`

const HeroMainSection = styled(motion.div)`
  width: 50%;
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

  @media (max-width: 575.98px) {
    width: 100%;
    height: 50%;
    margin: 0 auto;
    justify-content: center;

    h1 {
      padding-top: 2rem;
      font-size: 2rem;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 767.98px) {
    width: 100%;
    height: 50%;
  }

  @media (max-width: 991.98px) {
    width: 100%;
    height: 50%;
  }

  @media (max-width: 1199.98px) {
    width: 100%;
  }
`

const LeftRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;

  @media (max-width: 767.98px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;
  }
  @media (max-width: 991.98px) {
    display: flex;
    flex-direction: row;
    // width: 100%;
  height: 50vh;
  }

  @media (max-width: 1199.98px) {
    width: 100%;
    //height: 70vh;
  }
`

const HeroLeftSection = styled(motion.div)`
  width: 50%;
`

const HeroRightSection = styled(motion.div)`
  width: 50%;
`

// Section with Magazin cover

const SectionMagazinWrapper = styled.div`
margin: : 0 auto;
padding: 5rem 5rem;
margin-top: 1.5rem;
display: flex;
flex-direction: column;
`

const MagazinImageWrapper = styled(motion.div)`
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

  @media (max-width: 991.98px){
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}

@media (max-width: 575.98px){
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

@media (max-width: 767.98px){
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

// @media (max-width: 1199.98px){
//   grid-template-columns: 1fr 1fr ;
//   grid-template-rows: 1fr;
// }
`

const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 25rem;
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

const PostText = styled(motion.div)`
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

const AllProjLinkWrapper = styled.div``

const AllProjLink = styled.div`
  display: flex;
  justify-content: flex-start;

  a {
    font-size: 1.5rem;
    font-family: Roboto, sans-serif;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 800;
    margin-left: 2rem;
  }
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
        <LeftRightWrapper>
          <HeroLeftSection
            animate={{
              y: [-950, -700, -500, 0],
              opacity: [0, 0, 0, 1],
            }}
            transition={{ duration: 2, ease: "linear" }}
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
            transition={{ duration: 2, ease: "linear" }}
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
        </LeftRightWrapper>
      </HeroContainer>

      <SectionWrapper>
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <Post key={node.slug}>
              <PostImage>
                <Img
                  fluid={node.image.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  style={{ height: "100%", position: "relative" }}
                />
              </PostImage>
              <PostText
                animate={{ scale: [0, 0, 1.1, 1], opacity: [0.1, 0.3, 0.5, 1] }}
                transition={{ duration: 2, ease: "linear" }}
              >
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

      <AllProjLink>
        <Link to="/projects">Все работы</Link>
      </AllProjLink>

      <SectionMagazinWrapper>
        <MagazinTextWrapper>
          <h2>Фото для обложки журнала #ПР92</h2>
        </MagazinTextWrapper>
        <MagazinImageWrapper whileHover={{ scale: 1.1 }}>
          <img src={Cover} style={{ height: "42rem" }}></img>
        </MagazinImageWrapper>
      </SectionMagazinWrapper>
      {/* <SectionWrapper>
        <form name="contact" netlify>
          <p>
            <label>
              Name <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email <input type="email" name="email" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </SectionWrapper> */}
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
