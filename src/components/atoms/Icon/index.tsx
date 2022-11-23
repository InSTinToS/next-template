import { useIcon } from './logic'
import { IIconProps } from './types'

import Link from 'next/link'

export const Icon = ({
  desc,
  href,
  title,
  children,
  labelledBy,
  linkTarget = '_self',
  ...props
}: IIconProps) => {
  const { ariaLabelledBy, descId, titleId } = useIcon({ labelledBy })

  return (
    <svg
      role='img'
      aria-labelledby={ariaLabelledBy}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <title id={titleId}>{title}</title>

      <desc id={descId}>{desc}</desc>

      {href ? (
        <Link href={href} target={linkTarget}>
          <g>{children}</g>
        </Link>
      ) : (
        children
      )}
    </svg>
  )
}
