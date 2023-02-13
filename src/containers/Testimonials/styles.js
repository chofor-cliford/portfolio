import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TestContainers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
`;


export const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  min-height: 320px;
  background: #fff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }

`;

export const TestImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  @media screen and (min-width: 2000px) {
    min-height: 450px;
    width: 150px;
    height: 150px;
}
@media screen and (max-width: 850px) {
    width: 100%;
}

`;

export const TestContents = styled.div`
    flex: 1;
    height: 100%;
    padding: 0 2rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    
    align-items: flex-start;
 
`;

export const TestContent = styled.div`
    justify-content: space-around;

  p{
    font-size: 1.25rem;
    color: var(--black-color);
    line-height: 2rem;
    font-family: var(--font-base);

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
    line-height: 3.5rem;
  }
  }
  @media screen and (max-width: 600px) {
    margin-top: 2rem;
    padding: 0;
  }
`;

export const TestName = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  color: var(--secondary-color);
  text-align: left;
  margin-top: 2rem;

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

export const TestsName = styled.h2`
    font-size: 0.8rem;
    color: var(--gray-color);
    line-height: 1.5;
    font-weight: 400;
    margin-top: 5px;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }
  
`;

export const TestBtnContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: row;
   margin-top: 1rem;
   

    svg{
    width: 20px;
    height: 20px;
    

    }
`;

export const TestBtnWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background: #fff;
   color: var(--secondary-color);
   margin: 1rem;
   cursor: pointer;

   &:hover{    
        color: #fff;
        background: var(--secondary-color);
    }
`;

export const BrandsContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 80%;
   flex-wrap: wrap;
   margin-top: 2rem;
   @media screen and (max-width: 800px) {
        width: 100%;
}
`;

export const Div1 = styled(motion.div)`
  width: 150px;
  margin: 1.5rem;
`;

export const BrandImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  filter: grayscale(1);

  &:hover{
    filter: grayscale(0);
  }
  @media screen and (min-width: 2000px) {
    width: 210px;
    margin: 2rem;
  }
  @media screen and (max-width: 450px) {
    width: 120px;
    margin: 1rem;
}
`;