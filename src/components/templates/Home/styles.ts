import type { IHomeStyleProps } from './types'

import styled from 'styled-components'

const HomeStyle = styled.div<IHomeStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  .Button {
    width: 300px;
  }
`

export { HomeStyle }
