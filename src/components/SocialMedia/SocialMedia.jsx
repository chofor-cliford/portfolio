import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from "react-icons/fa";
import { SocialContainer, SocialWrapper } from './styles';

const SocialMedia = () => {
  return (
    <SocialContainer>
      <SocialWrapper>
        <BsTwitter />
      </SocialWrapper>
      <SocialWrapper>
        <FaFacebookF />
      </SocialWrapper>
      <SocialWrapper>
        <BsInstagram />
      </SocialWrapper>
    </SocialContainer>
  )
}

export default SocialMedia