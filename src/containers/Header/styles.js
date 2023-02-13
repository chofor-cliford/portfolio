import styled from 'styled-components';
import { motion } from 'framer-motion';
import img1 from "../../assets/bgIMG.png"

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  background-image: url(${img1});
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  flex-direction: row;
  padding: 6rem 2rem 0rem;

  @media screen and (min-width: 2000px) {
    padding-top: 8rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 450px) {
    padding: 6rem 1rem 2rem;
  }
  

`;

export const Div1 = styled(motion.div)`
  flex: 0.65;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  margin: 0 2rem;
  
  @media screen and (max-width: 1200px){
    width: 100%;
    margin-right: 0rem;
  }
`;

export const BadgeContainers = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
`;
export const BadgeContainer = styled.div`
  flex-direction: row;
`;

export const BadgeWrappers = styled.div`
  padding: 1rem 2rem;
  border-color: var(--white-color);
  border-radius: 15px;
  flex-direction: row;
  width: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const BadgeWrapper = styled.div`
  margin-left: 20px;
`;
export const BadgeIntro1 = styled.p`
    font-size: 0.8rem;
    text-align: left;
    color: var(--gray-color);
    line-height: 1.5;

    @media screen and (min-width: 2000px) {
        font-size: 1.75rem;
    }
`;

export const Emoji = styled.span`
  font-size: 2.5rem;
  @media screen and (min-width: 2000px){
    font-size: 5rem;
  }
  @media screen and (max-width: 1200px){
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const BadgeIntro = styled.p`
    font-size: 0.8rem;
    text-align: center;
    width: 100%;
    text-transform: uppercase;
    color: var(--gray-color);
    line-height: 1.5;

    @media screen and (min-width: 2000px) {
        font-size: 1.75rem;
    }
`;

export const BadgeIntro2 = styled.h1`
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

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-color: var(--white-color);
  border-radius: 15px;
  flex-direction: column;
  width: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-top: 3rem;
`;

export const Div2 = styled(motion.div)`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
`;

export const ProfileImg = styled.img`
  width: 90%;
  object-fit: contain;
  z-index: 1; 
`;

export const Img1 = styled(motion.img)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  width: 100%;
  height: 90%;
  @media screen and (max-width: 1200px){
    margin: 2rem 0;

  }
`;
export const Div3 = styled(motion.div)`
  flex: 0.75;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 100%;
  margin-left: 1rem;
  @media screen and (max-width: 768px){
    flex-direction: row;
  }
`;

export const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--white-color);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  &:nth-child(1){
    width: 100px;
    height: 100px;
  }
  &:nth-child(2){
    margin: 1.75rem;
    width: 150px;
    height: 150px;
}
&:nth-child(3){
    width: 70px;
    height: 70px;
}
@media screen and (min-width: 2000px){
    &:nth-child(1){
    width: 400px;
    height: 400px;
  }
  &:nth-child(2){
    width: 170px;
    height: 170px;
}
&:nth-child(3){
    width: 200px;
    height: 200px;
}
@media screen and (max-width: 1200px){
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 0;
    margin: 1rem;
}
}
`;

export const Circle = styled.img`
  width: 60%;
  height: 60%;
`;

