import styled from "styled-components";
import { HiX, HiMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";
import img from "../../assets/bgWhite.png";

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: fixed;
  z-index: 2;
`;

export const NavLogoContainer = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
`;

export const NavLogo = styled.img`
  height: 40px;
  width: 190px;
  cursor: pointer;

  @media screen and (min-width: 2000px) {
    height: 80px;
    width: 360px;
    border-radius: 20px;
  }
  @media screen and (max-width: 280px) {
    height: 30px;
    width: 120px;
  }
`;

export const NavItemsList = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  text-align: left;
  color: var(--gray-color);
  line-height: 1.5;
  margin: 0 1rem;
  cursor: pointer;
  flex-direction: column;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }
`;

export const NavListItems = styled.div`
  width: 10px;
  height: 10px;
  background: ${({ active }) => (
    active ? "var(--secondary-color)" : "transparent"
  )};
  border-radius: 50%;
  margin-bottom: 5px;
`;

export const NavListLink = styled.a`
  color: var(--gray-color);
  text-decoration: none;
  text-transform: uppercase;
  flex-direction: column;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--secondary-color);
  }
`;

export const NavMenu = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--secondary-color);
  }
`;

export const MenuOpen = styled(HiMenuAlt4)`
  width: 70%;
  height: 70%;
  color: #fff;
`;

export const MenuClose = styled(HiX)`
  width: 35px;
  margin: 0.5em 1rem;
  height: 35px;
  color: var(--secondary-color);
`;

export const Div1 = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
  padding: 1rem;
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  background-image: url(${img});
  background-color: var(--white-color);
  background-size: cover;
  background-repeat: repeat;
  box-shadow: 0 0 20px rgba(168, 168, 168, 0.15);
`;

export const MobileItemsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const MobileList = styled.li`
  margin: 1rem;
`;

export const MobileListLink = styled.a`
  text-decoration: none;
  color: var(--gray-color);
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--secondary-color);
  }
`;
