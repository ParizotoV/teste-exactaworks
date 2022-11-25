import React from 'react'

import { Button as ButtonStyled, ButtonProps } from '.'

const Button = ({ children, ...root }: ButtonProps) => {
  return <ButtonStyled {...root}>{children}</ButtonStyled>
}

export default Button
