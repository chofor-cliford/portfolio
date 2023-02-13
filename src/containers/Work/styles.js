import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WorkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 4rem 0 2rem;
`;


export const ActiveItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: var(--gray-color);
  line-height: 1.5;
  padding: .5rem 1rem;
  border-radius: 0.5rem;
  color: #fff;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.5rem;
  background: var(--secondary-color);

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }
`;
export const NotActiveItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: var(--gray-color);
  line-height: 1.5;
  padding: .5rem 1rem;
  border-radius: 0.5rem;
  background: #fff;
  color: #000;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.5rem;

  &:hover{
    color: #fff;
    background: var(--secondary-color);
  }

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
    padding: 1rem 2rem;
    border-radius: 0.85rem;
  }
`;

export const Div1 = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const WorkItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 270px;
  flex-direction: column;
  margin: 2rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #fff;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease;
  @media screen and (max-width: 300px){
    width: 100%;
    margin: 1rem;
  }
  @media screen and (min-width: 2000px){
    width: 470px;
    padding: 1.25rem;
    border-radius: 0.75rem;
  }
  &:hover{
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  }
`;

export const WorkItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 230px;
  position: relative;

`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
  @media screen and (min-width: 2000px){
    height: 350px;
  }
`;

export const Div2 = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: .5rem;
  opacity: 0;
  transition: all 0.3s ease;
`;

export const ProjectLink = styled.a`
 
`;

export const Div3 = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  margin: 1rem;
  font-family: var(--font-base);
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  
  .svg{
    width: 50%;
    height: 50%;
    color: var(--white-color);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 100%;
  position: relative;
  flex-direction: column;
`;

export const TextTitle = styled.h4`
  font-size: 1rem;
  font-weight: 800;
  color: var(--black-color);
  text-align: left;
  margin-top: 1rem;
  line-height: 1.5;

  @media screen and (min-width: 2000px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

export const TextDesc = styled.p`
  font-size: 0.8rem;
  color: var(--gray-color);
  line-height: 1.5;
  margin-top: 10px;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background: #fff;
  top: -25px;

  &.p{
    font-size: 0.8rem;
    color: var(--gray-color);
    line-height: 1.5;
    margin-top: 10px;
  
    @media screen and (min-width: 2000px) {
      font-size: 1.75rem;
    }
  }
`;