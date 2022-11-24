import {
  TableBody,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination
} from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'

import { DataTableStates, Table, TableCell, TableProps, TableRow } from '.'

const DynamicTable: React.FC<TableProps> = ({ columns, rows }) => {
  const [dataTable, setDataTable] = useState<DataTableStates>({
    rows: [],
    columns: [],
    loading: true,
    page: 0,
    rowsPerPage: 10
  })

  useEffect(() => {
    setDataTable((prevState) => ({
      ...prevState,
      rows,
      columns,
      totalCount: rows.length
    }))
  }, [columns, rows])

  const handleChangePage = async (_: unknown, newPage: number) => {
    setDataTable((prevState) => ({ ...prevState, page: newPage }))
  }

  const handleChangeRowsPerPage = async (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDataTable((prevState) => ({
      ...prevState,
      page: 0,
      rowsPerPage: +event.target.value
    }))
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {dataTable.columns.map((column, index) => (
              <TableCell key={index}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.rows
            .slice(
              dataTable.page * dataTable.rowsPerPage,
              dataTable.page * dataTable.rowsPerPage + dataTable.rowsPerPage
            )
            .map((row, index) => (
              <TableRow key={index}>
                {Object.keys(row).map((key, index) => (
                  <TableCell key={index}>{row[key]}</TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TablePagination
            count={rows.length}
            labelDisplayedRows={({ count, to, from }) =>
              `${from}–${to} ${count !== -1 ? `de ${count}` : `mais que ${to}`}`
            }
            labelRowsPerPage="Registros por página:"
            onPageChange={(event, newPage) => handleChangePage(event, newPage)}
            onRowsPerPageChange={(event) => handleChangeRowsPerPage(event)}
            page={dataTable.page}
            rowsPerPage={dataTable.rowsPerPage}
            rowsPerPageOptions={[10, 15]}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

export default DynamicTable
