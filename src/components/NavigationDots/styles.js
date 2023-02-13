import styled from 'styled-components';


export const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const NavigationLink = styled.a`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0.5rem;
    background-color: ${({active}) => (active ? 'var(--secondary-color)': '#cbcbcb')};
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: var(--secondary-color);
    }

    @media screen and (min-width: 2000px) {
      width: 20px;
      height: 20px;
    }
  
`;