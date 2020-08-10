import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;

  h3 {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    font-size: 2.5rem;
    color: white;
  }

  @media (max-width: 575.98px) {
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 767.98px) {
  }
  @media (max-width: 991.98px) {
  }
  @media (max-width: 1199.98px) {
  }
`

const FormSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: #141e30;

  p {
    align-items: center;
    display: flex;
    justify-content: center;
    color: white;
    font-family: "Roboto", sans-serif;
  }
`

const FormWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 3rem;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40rem;
  // margin: 2rem 18rem;
  padding: 5rem 5rem;
  box-shadow: -10px -10px 30px 4px rgba(0, 0, 0, 0.1),
    10px 10px 30px 4px rgba(45, 78, 255, 0.15);

  @media (max-width: 575.98px) {
    // margin-right: 2rem;
    // margin-left: 2rem;
    // padding: 3rem 3rem;
    width: 20rem !important;
    margin: 0 !important;
    padding: 2rem !important;
  }
  @media (max-width: 767.98px) {
    // margin: 2rem 6rem;
    // padding: 3rem 3rem;
    width: 25rem;
  }
  @media (max-width: 991.98px) {
    padding: 3rem 3rem;
    margin-right: 2rem;
    margin-left: 2rem;
  }
  @media (max-width: 1199.98px) {
    // padding: 3rem 3rem;
    margin: 2rem 2rem;
  }
`
const FormText = styled.div`
  dispaly: flex;
  justify-content: center;

  h3 {
    color: white;
    font-size: 1.5rem;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    margin-top: 8.5rem;
  }
`
const FormInput = styled.input`
  height: 3rem;
  border-radius: 12px;
  border: none;
  margin-bottom: 1rem;

  @media (max-width: 575.98px) {
    height: 2.5rem;
    border-radius: 10px;
    font-size: 14px;
    padding-left: 10px;
    padding-right: 10px;
  }
`
const FormButtonWrapper = styled.div`
  margin-top: 1rem;
`

const FormButton = styled.button`
  background: #141e30;
  height: 50px;
  min-width: 150px;
  border: none;
  border-radius: 10px;
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  border: 1px solid white;
  cursor: pointer;

  @media (max-width: 575.98px) {
    max-width: 190px;
  }
`

const FormLabel = styled.label`
  margin-bottom: 1rem;
  color: white;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
`

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  })

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
    e.preventDefault()
  }
  return (
    <>
      <FormSectionWrapper>
        <HeaderWrapper>
          <h3>для связи</h3>
        </HeaderWrapper>
        <p>vailiy@gmail.com</p>
        <FormWrapper>
          <Form
            onSubmit={handleSubmit}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <FormInput type="hidden" name="form-name" value="contact" />
            <FormLabel htmlFor="name">Имя</FormLabel>
            <FormInput
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={formState.name}
              placeholder="Name"
            />
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={formState.email}
              placeholder="Email"
            />
            <FormButtonWrapper>
              <FormButton type="submit">Отправить</FormButton>
            </FormButtonWrapper>
          </Form>
        </FormWrapper>
        {/* <FormText>
          <h3>Напишите письмо, хоть две строчки всего</h3>
        </FormText> */}
      </FormSectionWrapper>
    </>
  )
}

export default Contact
