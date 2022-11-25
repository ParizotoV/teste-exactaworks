import {
  Table as TableMui,
  TableCell as TableCellMui,
  tableCellClasses,
  TableRow as TableRowMui
} from '@mui/material'
import { styled } from '@mui/material/styles'

export const Table = styled(TableMui)(() => ({
  '.MuiTableCell-root': {
    border: 0
  },
  boxShadow: '0',
  overflowX: 'auto',
  overflowY: 'auto',
  height: '100%'
}))

export const TableCell = styled(TableCellMui)(({ theme }) => ({
  cursor: 'pointer',
  [`&.${tableCellClasses.head}`]: {
    background: '#F8F8F8',
    fontWeight: '600',
    padding: '12px 16px 12px 16px',
    color: theme.palette.grey[600]
  },
  [`&.${tableCellClasses.body}`]: {
    border: 0,
    boxShadow: 0,
    fontSize: 15,
    padding: '12px 16px 12px 16px'
  }
}))

export const TableRow = styled(TableRowMui)(({ theme }) => ({
  '& td, & th': {
    borderBottom: '1px solid #E3E6E3 !important',
    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      minWidth: 200
    }
  }
}))

export const TableNameWrapper = styled('div')(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  gap: 11,
  [`@media (max-width: ${theme.breakpoints.values.lg}px)`]: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 1
  }
}))
