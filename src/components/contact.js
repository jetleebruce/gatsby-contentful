import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  h3 {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    font-size: 2.5rem;
  }
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 6rem 4rem;
  width: 50%;
`
const FormText = styled.div`
  width: 50%;
`
const FormInput = styled.input`
  height: 3rem;
  margin-bottom: 1rem;
`
const FormButtonWrapper = styled.div``

const FormButton = styled.button`
  margin-top: 1rem;
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
      <HeaderWrapper>
        <h3>Связь</h3>
      </HeaderWrapper>

      <FormWrapper
        style={{
          backgroundColor: `#141414`,
          // margin: `0 auto 0 auto`,
        }}
      >
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
            placeholder="Представьтесь, пожалуйста!"
          />
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={formState.email}
            placeholder="Ваш email"
          />
          <FormButtonWrapper>
            <FormButton type="submit">Отправить</FormButton>
          </FormButtonWrapper>
        </Form>
        <FormText>
          <h3>Hello world</h3>
        </FormText>
      </FormWrapper>
    </>
  )
}

export default Contact
