import 'moment/locale/pt-br'

import { Box, Grid, Typography } from '@mui/material'
import { DataService } from 'api/DataService'
import Checkbox from 'components/Checkbox'
import Select, { OptionsParams } from 'components/Select'
import TextField from 'components/TextField'
import { constructorUssuingBody } from 'models/IssuingBody'
import moment from 'moment'
import React, { useEffect, useState } from 'react'

import {
  CustomerState,
  ErrorState,
  ResponseIssuingBody
} from './Form.interface'
import { Wrapper } from './Form.styles'

const Form = () => {
  const [customer, setCustomer] = useState<CustomerState>({
    name: '',
    rg: '',
    sex: '',
    shippingDate: '',
    issuingBody: ''
  })

  const [errors, setErrors] = useState<ErrorState>({
    nameError: null,
    rgError: null,
    sexError: null,
    shippingDateError: null,
    issuingBodyError: null
  })

  const [issuingBody, setIssuingBody] = useState<OptionsParams[]>([])

  const getIssuingBody = async () => {
    const response = await DataService({ url: '/issuing_body', type: 'GET' })
    const issuingBody = constructorUssuingBody(
      response.data as ResponseIssuingBody[]
    )
    setIssuingBody(issuingBody)
  }

  useEffect(() => {
    getIssuingBody()
  }, [])

  const handleChangeTextField = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const {
      target: { name, value }
    } = event

    if (
      name === 'shippingDate' &&
      value.length === 10 &&
      !moment(value, 'DD/MM/YYYY', 'pt-br', true).isValid()
    ) {
      setErrors((prevState) => ({
        ...prevState,
        shippingDateError: 'Data inválida.'
      }))
    } else {
      setErrors((prevState) => ({
        ...prevState,
        shippingDateError: null
      }))
    }

    setCustomer((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <Wrapper>
      <Typography variant="lgBold" textAlign="center">
        REGISTRAR CLIENTE
      </Typography>
      <Box width="100%" display="flex" justifyContent="center">
        <Grid container={true} spacing={2} maxWidth="800px">
          <Grid item={true} xs={12}>
            <TextField
              label="Nome:"
              name="name"
              fullWidth={true}
              onChange={handleChangeTextField}
              value={customer.name}
            />
          </Grid>
          <Grid item={true} xs={4}>
            <TextField
              label="RG:"
              name="rg"
              fullWidth={true}
              mask="rg"
              onChange={handleChangeTextField}
              value={customer.rg}
            />
          </Grid>
          <Grid item={true} xs={4}>
            <TextField
              label="Data Expedição:"
              name="shippingDate"
              fullWidth={true}
              mask="date"
              error={!!errors.shippingDateError}
              messageError={errors.shippingDateError}
              onChange={handleChangeTextField}
              value={customer.shippingDate}
            />
          </Grid>
          <Grid item={true} xs={4}>
            <Select label="Orgão expedidor:" options={issuingBody} />
          </Grid>
          <Grid item={true} xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography variant="mdBold">SEXO: </Typography>
              <Checkbox
                onClick={() =>
                  setCustomer((prevState) => ({ ...prevState, sex: 'masc' }))
                }
                isActive={customer.sex === 'masc'}
                width="200px"
                marginLeft="6px"
              >
                Masculino
              </Checkbox>
              <Checkbox
                onClick={() =>
                  setCustomer((prevState) => ({ ...prevState, sex: 'fem' }))
                }
                isActive={customer.sex === 'fem'}
                width="200px"
                marginLeft="6px"
              >
                Feminino
              </Checkbox>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  )
}

export default Form
