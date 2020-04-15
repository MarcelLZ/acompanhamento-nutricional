import React from 'react'

import { Link } from './styles'

function Button ({ to, outlined, isDark, children, ...rest }) {
  return (
    <Link
      to={to}
      outlined={outlined}
      isDark={isDark}
      {...rest}
    >
      {children}
    </Link>
  )
}

export { Button }