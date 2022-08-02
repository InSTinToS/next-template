import { Style } from './styles'

import type { ButtonHTMLAttributes } from 'react'

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <Style {...props}>{children}</Style>
)

export default Button
