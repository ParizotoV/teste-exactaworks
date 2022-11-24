import { MenuItem } from '@mui/material'
import React, { useState } from 'react'

import { InputLabel, Select as SelectStyled, SelectProps, Wrapper } from '.'

const Select = ({ label, error, options, ...root }: SelectProps) => {
  const [isMyInputFocused, setIsMyInputFocused] = useState(false)

  const className = error
    ? 'label-error'
    : isMyInputFocused
    ? 'label-focus'
    : 'label'

  return (
    <Wrapper>
      <InputLabel className={className} shrink>
        {label?.toLocaleUpperCase()}
      </InputLabel>
      <SelectStyled
        {...root}
        onBlur={() => setIsMyInputFocused(false)}
        onFocus={() => setIsMyInputFocused(true)}
      >
        {options.map(({ label, value }, index) => (
          <MenuItem key={index} value={value}>
            {label}
          </MenuItem>
        ))}
      </SelectStyled>
    </Wrapper>
  )
}

export default Select
