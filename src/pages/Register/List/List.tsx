import { Box, Typography } from '@mui/material'
import { DataService } from 'api/DataService'
import Dialog from 'components/Dialog'
import Table from 'components/Table'
import { constructorCustomer, Customer } from 'models/Customer'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GridLoader } from 'react-spinners'

import { Button, Card, ResponseCustomer, Rows } from '.'

const List = () => {
  const navigate = useNavigate()
  const [customers, setCustomers] = useState<Customer[]>([])
  const [loading, setLoading] = useState(true)
  const [dialog, setDialog] = useState({
    description: 'Confirma excluir esse usuário?',
    isOpenDialog: false,
    title: 'EXCLUIR USUÁRIO.',
    id: ''
  })

  const getCustomers = async () => {
    const response = await DataService({ type: 'GET', url: '/customers' })
    const customers = constructorCustomer(response.data as ResponseCustomer[])
    setCustomers(customers)
    setLoading(false)
  }

  const handleEdit = (id: string) => {
    navigate(`/customers/edit/${id}`)
  }

  const handleOpenDialog = (id: string) => {
    setDialog((prevState) => ({
      ...prevState,
      isOpenDialog: true,
      id
    }))
  }

  const handleDelete = async () => {
    const response = await DataService({
      type: 'DELETE',
      url: `/customers/${dialog.id}`
    })

    if (response.status === 200) {
      setLoading(true)
      setDialog((prevState) => ({ ...prevState, id: '', isOpenDialog: false }))
      getCustomers()
    }
  }

  useEffect(() => {
    getCustomers()
  }, [])

  if (loading) {
    return (
      <Box display="flex" height="100%" alignItems="center">
        <GridLoader size={30} loading={loading} />
      </Box>
    )
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="70%"
      marginTop="48px"
    >
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="lgBold">Usúarios</Typography>
        <Button
          onClick={() => navigate('/customers/add')}
          data-cy="new-customer"
        >
          CRIAR NOVO
        </Button>
      </Box>
      {customers.length === 0 ? (
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="lgBold">
            Sem clientes cadastrado no momento
          </Typography>
        </Box>
      ) : (
        <Card>
          <Table
            columns={[
              { id: 'name', label: 'NOME', minWidth: '280px' },
              { id: 'rg', label: 'RG', minWidth: '100px' },
              {
                id: 'shippingDate',
                label: 'DATA DE EXPEDIÇÃO',
                minWidth: '100px'
              },
              { id: 'issuingBody', label: 'ORGÃO EMISSOR', minWidth: '100px' },
              { id: 'sex', label: 'SEXO', minWidth: '100px' },
              { id: 'actions', label: '', minWidth: '100px' }
            ]}
            rows={Rows(customers, {
              handleDelete: handleOpenDialog,
              handleEdit
            })}
          />
        </Card>
      )}

      <Dialog
        description={dialog.description}
        dialogIsOpen={dialog.isOpenDialog}
        handleClose={() =>
          setDialog((prevState) => ({
            ...prevState,
            isOpenDialog: false,
            id: ''
          }))
        }
        title={dialog.title}
      >
        <Button
          onClick={() =>
            setDialog((prevState) => ({
              ...prevState,
              isOpenDialog: false,
              id: ''
            }))
          }
        >
          NÃO
        </Button>
        <Button onClick={handleDelete} data-cy="confirm-customer">
          SIM
        </Button>
      </Dialog>
    </Box>
  )
}

export default List
