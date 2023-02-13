import React, { useState } from 'react';

import { v4 as uuidv4} from 'uuid'
import { AppWrap } from '../../Wrapper';
import { images } from '../../constants';
import { client } from '../../client';
import { Button, Card, EmailLink, FooterCard, FooterContainer, FooterContainers, FooterTitle, FormContainer, FormWrapper, Input, SuccessContainer, SuccessText, TextArea, TextAreaContainer } from './styles';

const Footer = () => {
    const [formData, setFormData] = useState({name: '', email : '', message: ''})
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showing, setShowing] = useState(true);

    const { name, message, email } = formData;

  const handleChaneInput = (e) => {
      const { name, value } = e.target;

      setFormData({...formData, [name]: value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact ={
      _id: uuidv4(),
      _type: 'contact',
      name: name,
      email: email,
      message: message 
    }

    client.createIfNotExists(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
        
      });

      setTimeout(() => setShowing(false), 5000)
      
  }

  return (
    <FooterContainers>
    <FooterTitle id='contact'>Take a Coffe & chat With Me</FooterTitle>
    <FooterContainer>
      <FooterCard>
        <Card src={images.email} alt='email'  />
        <EmailLink href='mailto:choforcliford@gmail.com'>choforcliford@gmail.com</EmailLink>
      </FooterCard>
      <FooterCard>
        <Card src={images.mobile} alt='mobile'  />
        <EmailLink href='tel: (+273) 678-818-223'> (+273) 678-818-223</EmailLink>
      </FooterCard>
    </FooterContainer>

    { isFormSubmitted ? (
      showing && (
      <SuccessContainer
        whileInView={{x: [-100, 0]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
      >
        <SuccessText>Thank you for getting in touch!. </SuccessText>
      </SuccessContainer>
    
    )):(

    <FormContainer onSubmit={handleSubmit}>
      <FormWrapper>
        <Input type='text' placeholder='Your Name' name='name'  value={name} onChange={handleChaneInput} required />
      </FormWrapper>
      <FormWrapper>
        <Input type='email' placeholder='Your Email' name='email'  value={email} onChange={handleChaneInput} required />
      </FormWrapper>
      <TextAreaContainer>
        <TextArea placeholder='Your Message' value={message} name='message' onChange={handleChaneInput} required />
      </TextAreaContainer>
      <Button type='submit' >{ loading ? 'Sending... ': 'Send Message'}</Button>
    </FormContainer>
    )}
    </FooterContainers> 
  )
}

export default AppWrap(Footer, 'contact')