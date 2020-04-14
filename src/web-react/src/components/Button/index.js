import React from 'react'

import { Link } from './styles'

function Button ({ to, outlined, children, ...rest }) {
  return (
    <Link
      to={to}
      outlined={outlined}
      {...rest}
    >
      {children}
    </Link>
  )
}

export { Button }