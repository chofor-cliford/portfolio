import React from 'react'
import { NavigationContainer, NavigationLink } from './styles'

const List = ['home','about', 'work', 'skills', 'testimonials', 'contact'];


const NavigationDots = ({active}) => {
  return (
    <NavigationContainer>
      {List.map((item, i) => (
        <NavigationLink
          href={`#${item}`}
          key={item + i}
          active={active === item ? active : !active}
       />
      ))}
    </NavigationContainer>
  )
}

export default NavigationDots