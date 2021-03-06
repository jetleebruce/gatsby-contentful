import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Contact from "../components/contact"
import Footer from "../components/footer"
import SEO from "../components/seo"

import Behance from "../images/behance.png"
import Cover from "../images/space.jpg"
import Telegram from "../images/telegram.png"

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

const HeroMainSection = styled.div`
  width: 100%;
  // background: linear-gradient(#141e30, #28416f);
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: #171616;
    font-weight: 600;
    margin: 0 auto;
    padding-bottom: 1rem;
    font-family: "Lato", sans-serif;
  }
  p {
    color: #171616
    margin: 0 auto;
    font-family: "Lato", serif;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 1rem;
    text-align: center;
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
      text-align: center;
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
  width: 100%;

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

const HeroLeftSection = styled.div`
  width: 100%;
`

const HeroRightSection = styled.div`
  width: 50%;
`

// Section with Magazin cover

const SectionMagazinWrapper = styled.div`
margin: : 0 auto;
padding: 5rem 5rem;
margin-top: 1.5rem;
display: flex;
flex-direction: column;

@media (max-width: 575.98px) {
    margin-top: 0.5rem;
    padding: 2rem 2rem;
  }
`

const MagazinImageWrapper = styled.div`
  margin: 0 auto;
  margin-top: 1.5rem;

  img {
    height: 38rem;
    width: auto;
  }

  @media (max-width: 575.98px) {
    img {
      height: 28rem;
    }
  }
`

const MagazinTextWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  span {
    font-family: "Lato", sans-serif;
    font-size: 20px;
    font-weight: 300;
    justify-content: center;
  }
  h2 {
    font-family: "Lato", sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 2.5rem;
  }

  @media (max-width: 575.98px) {
    h2 {
      font-size: 1.5rem;
    }
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

const Post = styled.div`
  position: relative;
  margin-bottom: 2rem;
`

const PostImage = styled.div`
  margin-right: 1rem;
  position: relative;
`

const PostText = styled.div`
  
  margin: 0;
  // margin-bottom: 2px;
  h2{
      margin-block-end: 0 !important;
  }
  h2 a {
    color: #171616;
    font-size: 2rem;
    font-weight: 500;  
    margin-bottom: 0;  
    font-family: Montserrat,sans-serif;
  
    
  }

  p {
    color: #171616;
    font-family: Montserrat,sans-serif;
    display: none;
  }

  @media (max-width: 575.98px){
    margin: 0.5rem;

    h2{
      margin-bottom: 0.5rem;
    }
    
h2 a {
  font-size: 1.2rem !important;
}

p{
  font-size: 0.8rem !important;
}
  }
  }

    @media (max-width: 991.98px){
    margin: .5rem;

    h2 a{
   font-size:1.9rem ;
    }

    p{
  font-size: 0.6rem !important;
}
  }
`

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

  @media (max-width: 575.98px) {
    a {
      font-size: 1rem;
    }
  }
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulPost.edges
  const heroImg = data.contentfulHero.heroImage.fluid
  const heroImgRight = data.contentfulNew.pic.fluid

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Василий Хуртин" />
      <HeroContainer>
        <HeroMainSection>
          <h1>Vasiliy Khurtin</h1>
          <p>Architecture / Interior Photographer</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a
              href="https://www.behance.net/vshrt"
              style={{ boxShadow: "0 0 0 0", marginRight: "20px" }}
            >
              <img
                src={Behance}
                style={{ width: "2.5rem", textColor: "white" }}
                alt={"behance"}
              />
            </a>
            <a href="https://tlgg.ru/vs_hrt" style={{ boxShadow: "0 0 0 0" }}>
              <img
                src={Telegram}
                style={{ width: "2.5rem", textColor: "white" }}
                alt={"telegram"}
              />
            </a>
          </div>
        </HeroMainSection>

        <LeftRightWrapper>
          <HeroLeftSection>
            {/* <p style={{ position: "absolute", zIndex: 10, color: "#bcc0c2" }}>
              {heroTitle}
            </p> */}
            <Img
              fluid={heroImg}
              objectFit="cover"
              // objectPosition="100% 50%"
              style={{marginTop: "3rem", height: "85%", marginRight:"2rem"}}
              alt={data.contentfulHero.heroImage.title}
            />
          </HeroLeftSection>
          {/* <HeroRightSection>
            <p style={{ position: "absolute", zIndex: 10, color: "#bcc0c2" }}>
              {heroTitle}
            </p>
            <Img
              fluid={heroImgRight}
              objectFit="cover"
              objectPosition="50% 50%"
              style={{
                height: "100%",
                position: "relative",
                overflowX: "hidden",
              }}
              alt={data.contentfulNew.pic.title}
            />
          </HeroRightSection> */}
        </LeftRightWrapper>
      </HeroContainer>

      <SectionWrapper>
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <Post key={node.slug}>
              <PostText>
                <h2>
                  <Link style={{ boxShadow: `none` }} to={node.slug}>
                    {title}
                  </Link>
                </h2>
                <p>{node.subtitle}</p>
              </PostText>
              <PostImage>
                <Img
                  fluid={node.image.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  style={{ height: "100%", position: "relative" }}
                  alt={node.slug}
                />
              </PostImage>
            </Post>
          )
        })}
      </SectionWrapper>

      {/* <AllProjLink>
        <Link to="/projects">Все работы</Link>
      </AllProjLink> */}

      <SectionMagazinWrapper>
        <MagazinTextWrapper>
          <h2>Фото для обложки журнала #ПР92</h2>
        </MagazinTextWrapper>
        <MagazinImageWrapper>
          <img alt={"Cover"} src={Cover} />
        </MagazinImageWrapper>
      </SectionMagazinWrapper>
      <Contact />
      <Footer />
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
            fluid(maxWidth: 900) {
              ...GatsbyContentfulFluid_withWebp
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
        fluid(maxWidth: 900) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    contentfulNew {
      pic {
        title
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
