import { BoxProps } from '@mui/material'
import React from 'react'

interface ExtendCheckBox {
  isActive?: boolean
  children?: React.ReactNode
}

export type CheckboxProps = BoxProps & ExtendCheckBox
