import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SocialContainer, SocialWrapper } from "./styles";

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
        <a href="https://www.linkedin.com/in/chofor-cliford">
          <BsLinkedin color="black" />
        </a>
      </SocialWrapper>
    </SocialContainer>
  );
};

export default SocialMedia;
