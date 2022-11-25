import { BoxProps } from '@mui/material'
import React from 'react'

interface ExtendCheckBox {
  isActive?: boolean
  children?: React.ReactNode
  error?: boolean
}

export type CheckboxProps = BoxProps & ExtendCheckBox
