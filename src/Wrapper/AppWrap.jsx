import React from 'react';
import { NavigationDots, SocialMedia } from '../components'
import { Div1, WrapperContainer, WrapperContainers, WrapperWrapper } from './styles';

const AppWrap = (Component, idName ) => function HOC() {
  return (
    <Div1
       whileInView={{y: [100, 50, 0], opacity: [0, 0, 1]}}
       transition={{duration: 0.5}}
    >
    <WrapperContainers >
      <SocialMedia />
      <WrapperContainer>
         <Component />
         <WrapperWrapper>
          <p>© 2022 Cliford</p>
          <p>All rights reserved</p>
         </WrapperWrapper>
      </WrapperContainer>
      <NavigationDots active={idName} />
    </WrapperContainers>
    </Div1>
  )
}

export default AppWrap;