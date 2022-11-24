export interface TableProps {
  rows: any[]
  columns: Column[]
}

interface Column {
  label: string
}

export interface DataTableStates {
  rows: any[]
  columns: Column[]
  loading: boolean
  page: number
  rowsPerPage: number
}
