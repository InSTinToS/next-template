import { HomeStyle } from './styles'
import type { IHomeProps } from './types'

import Button from 'components/molecules/Button'

const Home = (props: IHomeProps) => (
  <HomeStyle {...props}>
    <Button>Hello world</Button>
  </HomeStyle>
)

export default Home
