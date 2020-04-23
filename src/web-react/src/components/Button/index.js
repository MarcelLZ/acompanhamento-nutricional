import React from 'react'

import { Link, StyledButton } from './styles'

function Button ({ to, onClick = () => {}, outlined, isDark, children, type = 'link', ...rest }) {
  if (type === 'link') {
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

  return (
    <StyledButton
      outlined={outlined}
      isDark={isDark}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

export { Button }