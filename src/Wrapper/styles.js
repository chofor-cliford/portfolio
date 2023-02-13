import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WrapperContainers = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;

`;
export const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  flex-direction: column;
  padding: 4rem 2rem;

  @media screen and (max-width: 450px) {
    padding: 4rem 1rem 2rem;
  }
`;

export const WrapperWrapper = styled.div`
  width: 100%;
  padding: 2rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 0.8rem;
  color: var(--gray-color);
  line-height: 1.5;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }

  &.p {
    text-transform: uppercase;
    color: var(--black-color);
  }
`;

export const Div1 = styled(motion.div)`
  
`;