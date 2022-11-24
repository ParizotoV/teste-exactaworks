import React, { useState } from 'react'

import {
  Input,
  InputError,
  InputLabel,
  InputProps,
  maskDate,
  maskRG,
  Wrapper
} from '.'

const TextField = ({
  error,
  messageError,
  label,
  onChange,
  mask = 'string',
  ...root
}: InputProps) => {
  const [isMyInputFocused, setIsMyInputFocused] = useState(false)

  const className = error
    ? 'label-error'
    : isMyInputFocused
    ? 'label-focus'
    : 'label'

  const maskInput = {
    date: {
      onChange: (valueInput: string) => maskDate(valueInput)
    },
    rg: {
      onChange: (valueInput: string) => maskRG(valueInput)
    },
    string: {
      onChange: (valueInput: string) => valueInput
    }
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = maskInput[mask].onChange(event.target.value)
    console.log(value)
    event.target.value = value
    onChange && onChange(event)
  }

  return (
    <Wrapper>
      <InputLabel className={className} shrink>
        {label?.toLocaleUpperCase()}
      </InputLabel>
      <Input
        {...root}
        error={error}
        onBlur={() => setIsMyInputFocused(false)}
        onFocus={() => setIsMyInputFocused(true)}
        onChange={handleChange}
      />
      {error && (
        <InputError className={className}>
          {messageError?.toLocaleUpperCase()}
        </InputError>
      )}
    </Wrapper>
  )
}

export default TextField
