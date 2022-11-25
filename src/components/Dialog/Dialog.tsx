import {
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material'
import MUIDialog from '@mui/material/Dialog'
import * as React from 'react'

import { AlertDialogProps } from '.'

const Dialog = ({
  title,
  description,
  children,
  loading,
  dialogIsOpen,
  handleClose
}: AlertDialogProps) => {
  if (loading) {
    return (
      <MUIDialog open={loading}>
        <DialogContent>
          <CircularProgress
            sx={{ color: (theme) => theme.palette.primary.main }}
          />
        </DialogContent>
      </MUIDialog>
    )
  }

  return (
    <MUIDialog onClose={handleClose} open={dialogIsOpen}>
      <DialogTitle align="center">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        {children}
      </DialogActions>
    </MUIDialog>
  )
}

export default Dialog
