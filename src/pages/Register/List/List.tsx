import { Box, Typography } from '@mui/material'
import { DataService } from 'api/DataService'
import Table from 'components/Table'
import { constructorCustomer, Customer } from 'models/Customer'
import React, { useEffect, useState } from 'react'

import { ResponseCustomer, Rows } from '.'

const List = () => {
  const [customers, setCustomers] = useState<Customer[]>([])

  const getCustomers = async () => {
    const response = await DataService({ type: 'GET', url: '/customers' })
    const customers = constructorCustomer(response.data as ResponseCustomer[])
    setCustomers(customers)
  }

  useEffect(() => {
    getCustomers()
  }, [])

  return (
    <Box width="70%" marginTop="60px">
      <Typography>Usúarios</Typography>
      <Table
        columns={[{ label: 'Nome' }, { label: 'RG' }, { label: '' }]}
        rows={Rows(customers)}
      />
    </Box>
  )
}

export default List
