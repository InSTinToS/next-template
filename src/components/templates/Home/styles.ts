import { NavbarPadding } from 'components/providers/Navbar/styles'
import styled from 'styled-components'
import tw from 'twin.macro'

const Style = styled.main`
  ${NavbarPadding}

  ${tw`
    flex 
    flex-col
    space-y-8
    items-center
    justify-center
    
    px-26
    pb-26
 
    text-10xl
  
    bg-primary-500
    text-secondary
  `}

  button {
    ${tw`
      text-2xl
    `}
  }
`

export { Style }
