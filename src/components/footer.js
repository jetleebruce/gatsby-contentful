import React, { useState } from "react"
import styled from "styled-components"

import Behance from "../images/behance.png"
import Telegram from "../images/telegram.png"

const FooterWrapper = styled.div`
  margin: 0 auto;
  background: #141e30;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
const CopyrightWrapperFooter = styled.div`
  align-items: center;
  display: flex;
  width: 50%;

  span {
    font-size: 1.2rem;
    font-weight: 300;
    color: white;
    font-family: "Roboto", sans-serif;
    justify-content: center;
  }
`

const SocialWrapperFooter = styled.div`
  display: flex;
  width: 40%;
`
const SocialLinkWrapper = styled.div`
  margin-top: 1.5rem;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <CopyrightWrapperFooter>
        <span>&#169;2020 Vasiliy Khurtin </span>
      </CopyrightWrapperFooter>
      <SocialWrapperFooter>
        <SocialLinkWrapper>
          <a
            href="https://www.behance.net/vshrt"
            style={{ boxShadow: "0 0 0 0", marginRight: "20px" }}
          >
            <img src={Behance} style={{ width: "2.5rem" }} />
          </a>
          <a href="https://tlgg.ru/vs_hrt" style={{ boxShadow: "0 0 0 0" }}>
            <img src={Telegram} style={{ width: "2.5rem" }} />
          </a>
        </SocialLinkWrapper>
      </SocialWrapperFooter>
    </FooterWrapper>
  )
}

export default Footer
