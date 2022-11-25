import { MenuItem } from '@mui/material'
import React, { useState } from 'react'

import {
  InputError,
  InputLabel,
  Select as SelectStyled,
  SelectProps,
  Wrapper
} from '.'

const Select = ({
  label,
  error,
  options,
  messageError,
  ...root
}: SelectProps) => {
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
        error={error}
        onBlur={() => setIsMyInputFocused(false)}
        onFocus={() => setIsMyInputFocused(true)}
      >
        {options.map(({ label, value }, index) => (
          <MenuItem data-cy={`form-select-${value}`} key={index} value={value}>
            {label}
          </MenuItem>
        ))}
      </SelectStyled>
      {error && (
        <InputError className={className}>
          {messageError?.toLocaleUpperCase()}
        </InputError>
      )}
    </Wrapper>
  )
}

export default Select
