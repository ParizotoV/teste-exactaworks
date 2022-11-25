import { ButtonProps as MUIButtonProps } from '@mui/material'

export interface ExtendButtonProps {
  width?: string
}

export type ButtonProps = ExtendButtonProps & MUIButtonProps
