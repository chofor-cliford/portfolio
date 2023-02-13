import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactToolTip from 'react-tooltip';

export const SkillsTitle = styled.h1`
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

export const SkillsContainer = styled.div`
  display: flex;
  width: 80%;
  margin-top: 3rem;
  flex-direction: row;

  @media screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Div1 = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 5rem;

  @media screen and (max-width: 900px) {
    justify-content: center;
    align-items: center;
    margin-right: 0;
  }
`;

export const Div2 = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 1rem;
  transition: all 0.3s ease-in;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  color: #fff;
`;

export const Icon = styled.img`
  width: 50%;
  height: 50%;
  &:hover{
    box-shadow: 0 0 25px #fef4f5;

    @media screen and (min-width: 2000px) {
        width: 150px;
        height: 150px;
  }
  @media screen and (max-width: 450px) {
        width: 70px;
        height: 70px;
  }
  }
`;

export const IconName = styled.p`
  font-size: 0.8rem;
  color: var(--gray-color);
  line-height: 1.5;
  font-weight: 500;
  margin-top: 0.5rem;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
    margin: 1rem 2rem;
    margin-top: 1rem;
  }
`;

export const Div3 = styled(motion.div)`
  flex: 1;
`;

export const Div4 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const ExperienceTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: var(--black-color);
  text-align: left;


  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

export const ExperienceParagraph = styled.p`
  font-size: 0.8rem;
  color: var(--gray-color);
  line-height: 1.5;
  font-weight: 400;
  margin-top: 5px;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }
`;

export const ToolTip = styled(ReactToolTip)`
  max-width: 300px !important;
  background: var(--white-color) !important;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1) !important;
  border-radius: 5px !important;
  padding: 1rem !important;
  color: var(--gray-color) !important;
  text-align: center !important;
  line-height: 1.5 !important;
  opacity: 1 !important;
  @media screen and (min-width: 2000px) {
    font-size: 1.75rem !important;
    max-width: 500px !important;
    line-height: 2 !important;
  }
`;

export const ExperienceContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: 900px){
    margin-top: 2rem;
  }
`;

export const Div5 = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1rem 0;
`;

export const ExperienceText = styled.div`
  margin-right: 3rem;
  font-weight: 800;
 
  font-size: 1rem;
  color: var(--secondary-color);
  text-align: left;
  


  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 0.9rem;
    margin-right: 1rem;
  }
  
`;


