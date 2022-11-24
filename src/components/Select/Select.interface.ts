import { SelectProps as MUISelectProps } from '@mui/material'

export interface OptionsParams {
  label?: string
  value?: string
}

interface ExtendSelectProps {
  error?: boolean
  errorMessage?: string
  label?: string
  options: OptionsParams[]
}

export type SelectProps = ExtendSelectProps & Omit<MUISelectProps, 'label'>
