import React from "react"
import styled from "styled-components"

const HeroContainer = styled.div`
height: 0;
`

const HeroMainSection = styled.div`
  
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

