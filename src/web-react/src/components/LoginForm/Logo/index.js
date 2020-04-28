import React from 'react'

import { LogoIMG } from './styles'

function Logo () {
  return (
    <LogoIMG
      src={`${process.env.PUBLIC_URL}/assets/images/LogoNutrilife2.svg`}
      alt="nutrilife"
    />
  )
}

export { Logo }