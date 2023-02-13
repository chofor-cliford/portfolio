import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutText = styled.h1`
  font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  color: var(--black-color);
  text-transform: capitalize;

 @media screen and (min-width: 2000px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
`;
export const AboutSpan = styled.span`
   color: var(--secondary-color);
 @media screen and (min-width: 2000px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export const Div1 = styled(motion.div)`
  width: 190px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 2rem;
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 170px;
  border-radius: 15px;
  object-fit: cover;
  @media screen and (min-width: 2000px){
    width: 370px;
    height: 320px;
    margin: 2rem 4rem;
    object-fit: cover;
  }
`;

export const AboutTitle = styled.h2`
  font-size: 1rem;
  font-weight: 800;
  color: var(--black-color);
  text-align: left;
  margin-top: 20px;

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 450px) {
    
font-size: 0.9rem;
  }
`;

export const AboutParagraph = styled.p`
  font-size: 0.8rem;
  color: var(--gray-color);
  line-height: 1.5;
  margin-top: 10px;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }
`;

