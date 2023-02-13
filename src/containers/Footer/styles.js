import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterContainers = styled.div`
  flex-direction: column;
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const FooterTitle = styled.h1`
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

export const FooterContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap-reverse;
  margin: 4rem 2rem 2rem;
`;

export const FooterCard = styled.div`
  min-width: 290px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  background: #fef4f5;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  &:hover{
    box-shadow: 0 0 25px #fef4f5;
  }

  &:nth-child(2){
    background: #f2f7fb;
  }
`;

export const Card = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 0.7rem;
`;

export const EmailLink = styled.a`
  font-size: 0.8rem;
  color: var(--gray-color);
  line-height: 1.5;
  text-decoration: none;
  font-weight: 500;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }
 
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  flex-direction: column;
  margin: 1rem 2rem;

`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0.75rem 0;
  border-radius: 10px;
  cursor: pointer;
  background-color: var(--primary-color);
  transition: all 0.3s ease-in-out
`;

export const Input = styled.input`
  font-size: 0.8rem;
  color: var(--gray-color);
  line-height: 1.5;
  width: 100%;
  padding: 0.95rem;
  border: none;
  border-radius: 7px;
  background-color: var(--primary-color);
  font-family: var(--font-base);
  color: var(--secondary-color);
  outline: none;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
 
  &:hover{
    box-shadow: 0 0 25px var(--primary-color);
  }

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }}
`;

export const TextAreaContainer = styled.div`
  width: 100%;
  
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.95rem;
  border: none;
  border-radius: 7px;
  background: var(--primary-color);
  font-family: var(--font-base);
  color: var(--secondary-color);
  outline: none;
  height: 170px;
 
  &:hover{
    box-shadow: 0 0 25px var(--primary-color);
  }
`;

export const Button = styled.button`
  font-size: 0.8rem;
  line-height: 1.5;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  background: var(--secondary-color);
  color: #fff;
  font-weight: 500;
  outline: none;
  margin: 2rem 0 0 0;
  font-family: var(--font-base);
  cursor: pointer;
  transition: cubic-bezier(0.55, 0.085, 0.68, 0.53);

  &:hover {
    background-color: #2430af;
  }

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
  }
`;

export const SuccessContainer = styled(motion.div)`
  background: var(--secondary-color);
  font-family: var(--font-base);
  height: 100px;
  width: 70%;
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  @media screen and (max-width: 768px){
    font-size: small;
  }
`;

export const SuccessText = styled.h3`
  color: #fff;
`;