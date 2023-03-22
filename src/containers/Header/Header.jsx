import React from 'react';
import { images } from '../../constants';
import { BadgeContainer, BadgeContainers, BadgeIntro, BadgeIntro1, BadgeIntro2, BadgeWrapper, BadgeWrappers, Circle, CircleContainer, Div1, Div2, Div3, Emoji, HeaderContainer, Img1, ProfileImg, TagContainer } from './styles';
import { AppWrap } from '../../Wrapper';

const scaleVariant = {
  whileInView: ({
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  })
};

const Images = [images.writing, images.html, images.typescript];

const Header = () => {
  return (
    <HeaderContainer id='home'>
      <Div1
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.5}}
      >
        <BadgeContainers>
         <BadgeContainer>
          <BadgeWrappers>
            <Emoji>👋</Emoji>
            <BadgeWrapper>
              <BadgeIntro1>Hello, I am</BadgeIntro1>
              <BadgeIntro2>Cliford</BadgeIntro2>
            </BadgeWrapper>
          </BadgeWrappers>
          <TagContainer>
          <BadgeIntro>Web Developer</BadgeIntro>
          <BadgeIntro>& Writer</BadgeIntro>          
          </TagContainer>
         </BadgeContainer>
        </BadgeContainers>
      </Div1>
      <Div2
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
      >
        <ProfileImg src={images.profile1} alt='profile-image' />
        <Img1
          whileInView={{scale: [0, 1]}}
          transition={{duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile-circle'
          />
          </Div2>
        <Div3
          variants={scaleVariant}
          whileInView={scaleVariant.whileInView}
        >
          {Images.map((items) => (
            <CircleContainer key={items}>
              <Circle src={items} alt='circle' />
            </CircleContainer>
          ))}
        </Div3>
      
      
    </HeaderContainer>
  )
}

export default AppWrap(
   Header, 'home'
)