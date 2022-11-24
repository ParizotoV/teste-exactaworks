import React from 'react'

import { Checkbox as CheckboxStyled, CheckboxProps } from '.'

const Checkbox: React.FC<CheckboxProps> = ({ children, ...root }) => {
  return <CheckboxStyled {...root}>{children}</CheckboxStyled>
}

export default Checkbox
