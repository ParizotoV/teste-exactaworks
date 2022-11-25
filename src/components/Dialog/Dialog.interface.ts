export interface AlertDialogProps {
  title: string
  description: string
  dialogIsOpen: boolean
  loading?: boolean
  handleClose: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}
