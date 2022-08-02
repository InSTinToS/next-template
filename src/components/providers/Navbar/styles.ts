import styled, { css } from 'styled-components'
import tw from 'twin.macro'

const NavbarPadding = css`
  ${tw`mt-26`}
`

const Style = styled.nav`
  ${tw`fixed top-0 z-10 min-w-80 w-full h-26 px-4 bg-primary-500`}

  &,
  ul {
    ${tw`flex flex-row items-center justify-between`}
  }

  ul {
    ${tw`relative z-20 space-x-8 max-w-screen-3xl mx-auto w-full`}

    li a, li button {
      ${tw`h-8 flex items-center text-xl`}

      .logo {
        ${tw`h-8 w-36`}
      }
    }
  }

  @media screen and (min-width: 768px) {
    ul li a {
      .logo {
        ${tw`h-10 w-40`}
      }
    }
  }

  @media screen and (min-width: 1920px) {
    ul {
      ${tw`px-4`}
    }
  }
`

export { Style, NavbarPadding }
