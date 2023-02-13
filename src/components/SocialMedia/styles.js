import styled from 'styled-components';

export const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;

export const SocialWrapper = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--white-color);
    margin: 0.25rem 0;
    border: 1px solid var(--lightGray-color);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &.svg {
      width: 15px;
      height: 15px;
      color: var(--gray-color);
    }

    &:hover {
      background-color: var(--secondary-color);
      border-color: var(--secondary-color);

      &.svg {
        color: var(--white-color);
      }
    }

    @media screen and (min-width: 2000px) {
      width: 70px;
      height: 70px;

      margin: 0.5rem 0;

      &.svg {
        width: 30px;
        height: 30px;
      }
    }
  
`;






