import { SelectProps as MUISelectProps } from '@mui/material'

export interface OptionsParams {
  label?: string
  value?: string
}

interface ExtendSelectProps {
  error?: boolean
  messageError?: string | null
  label?: string
  options: OptionsParams[]
}

export type SelectProps = ExtendSelectProps & Omit<MUISelectProps, 'label'>
