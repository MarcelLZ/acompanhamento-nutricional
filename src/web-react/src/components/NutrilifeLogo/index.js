import React from 'react'

import { LogoIMG } from './styles'

function NutrilifeLogo () {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/Circle.svg`}
        alt="Logo circle"
        width="200"
      />

      <LogoIMG
        src={`${process.env.PUBLIC_URL}/assets/images/LogoNutriLife.svg`}
        alt="Nutrilife logo"
      />
    </div>
  )
}

export { NutrilifeLogo }