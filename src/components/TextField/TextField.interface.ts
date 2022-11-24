import { InputBaseProps } from '@mui/material'

interface ExtendInputProps {
  label?: string
  error?: boolean
  messageError?: string | null
  mask?: 'date' | 'string' | 'rg'
}

export type InputProps = ExtendInputProps & InputBaseProps
