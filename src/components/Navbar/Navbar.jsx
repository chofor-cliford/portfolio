import React from "react";
import {
  NavContainer,
  NavItemsList,
  NavList,
  NavListItems,
  NavListLink,
  NavLogo,
  NavLogoContainer,
  NavMenu,
  Div1,
  MobileList,
  MobileListLink,
  MenuOpen,
  MenuClose,
  MobileItemsList,
} from "./styles";
import { images } from "../../constants";
import { useState } from "react";

const Navbar = () => {
  const List = ["home", "about", "work", "skills", "testimonials", "contact"];
  const [toggle, setToggle] = useState(false);

  const URL = window.location.location;

  return (
    <NavContainer>
      <NavLogoContainer href='#home'>
        <NavLogo src={images.logo} alt="logo" />
      </NavLogoContainer>
      <NavItemsList>
        {List.map((item) => (
          <NavList key={`link-${item}`}>
            <NavListLink href={`#${item}`}>
              <NavListItems active={`#${item}` === `#${URL}`}/>
              {item}
            </NavListLink>
          </NavList>
        ))}
      </NavItemsList>
      <NavMenu>
        <MenuOpen onClick={() => setToggle(true)} />
        {toggle && (
          <Div1
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <MenuClose onClick={() => setToggle(false)} />
            <MobileItemsList>
              {List.map((item) => (
                <MobileList key={item}>
                  <MobileListLink
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </MobileListLink>
                </MobileList>
              ))}
            </MobileItemsList>
          </Div1>
        )}
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;
