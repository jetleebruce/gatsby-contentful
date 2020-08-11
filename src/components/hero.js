import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

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

const HeroMainSection = styled.div`
  background-color: #4b565d;
  display: flex;
  flex-direction: column;
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



const Hero = () => {
  return (
    <HeroContainer>
      <HeroMainSection>
        <h1>Vasiliy Khurtin</h1>
        <p>Interior Photographer</p>
      </HeroMainSection>
      <HeroLeftSection>
        
      </HeroLeftSection>
      <HeroRightSection>
        <h4>Right</h4>
      </HeroRightSection>
    </HeroContainer>
  )
}

export default Hero

