import 'moment/locale/pt-br'

import { Box, Grid, Typography } from '@mui/material'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Select, { OptionsParams } from 'components/Select'
import TextField from 'components/TextField'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GridLoader } from 'react-spinners'

import {
  CancelButton,
  CustomerState,
  ErrorState,
  getCustomer,
  getIssuingBody,
  handleValidation,
  patch,
  post,
  Wrapper
} from '.'

const Form = () => {
  const navigate = useNavigate()
  const { uuid } = useParams()
  const [loading, setLoading] = useState(false)

  const [issuingBody, setIssuingBody] = useState<OptionsParams[]>([])
  const [submitted, setSubmitted] = useState<boolean>(false)
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

  const handleChangeTextField = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const {
      target: { name, value }
    } = event

    if (name === 'shippingDate' && value.length === 10) {
      setErrors((prevState) => ({
        ...prevState,
        shippingDateError: !moment(value, 'DD/MM/YYYY', 'pt-br', true).isValid()
          ? 'Data inválida.'
          : null
      }))
    }

    setCustomer((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    if (handleValidation(customer, errors, setErrors)) {
      if (uuid) {
        const response = await patch(customer, uuid)

        if (response.status === 200) {
          navigate('/customers')
        }
      } else {
        const response = await post(customer)

        if (response.status === 201) {
          navigate('/customers')
        }
      }
    } else {
      setSubmitted(true)
    }
  }

  useEffect(() => {
    getIssuingBody(setIssuingBody)
    if (uuid) {
      setLoading(true)
      getCustomer(uuid, setCustomer, setLoading)
    }
  }, [])

  useEffect(() => {
    if (submitted) {
      const result = handleValidation(customer, errors, setErrors)
      setSubmitted(!result)
    }
  }, [customer])

  if (uuid && loading) {
    return (
      <Box display="flex" height="100%" alignItems="center">
        <GridLoader size={30} loading={loading} />
      </Box>
    )
  }

  console.log(customer)

  return (
    <Wrapper>
      <Typography variant="lgBold" textAlign="center">
        {uuid ? 'EDITAR CLIENTE' : 'NOVO CLIENTE'}
      </Typography>

      <Box width="100%" display="flex" justifyContent="center">
        <Grid container={true} spacing={2} maxWidth="800px">
          <Grid item={true} xs={12}>
            <TextField
              label="Nome:"
              name="name"
              fullWidth={true}
              error={!!errors.nameError}
              messageError={errors.nameError}
              onChange={handleChangeTextField}
              value={customer.name}
              data-cy="form-name"
            />
          </Grid>
          <Grid item={true} xs={12} md={4}>
            <TextField
              label="RG:"
              name="rg"
              fullWidth={true}
              mask="rg"
              error={!!errors.rgError}
              messageError={errors.rgError}
              onChange={handleChangeTextField}
              value={customer.rg}
              data-cy="form-rg"
            />
          </Grid>
          <Grid item={true} xs={12} md={4}>
            <TextField
              label="Data Expedição:"
              name="shippingDate"
              fullWidth={true}
              mask="date"
              error={!!errors.shippingDateError}
              messageError={errors.shippingDateError}
              onChange={handleChangeTextField}
              value={customer.shippingDate}
              data-cy="form-shippingDate"
            />
          </Grid>
          <Grid item={true} xs={12} md={4}>
            <Select
              label="Orgão expedidor:"
              name="issuingBody"
              options={issuingBody}
              error={!!errors.issuingBodyError}
              messageError={errors.issuingBodyError}
              onChange={(event) => {
                const {
                  target: { value, name }
                } = event
                setCustomer((prevState) => ({
                  ...prevState,
                  [name]: value
                }))
              }}
              value={customer.issuingBody}
              data-cy="form-issuingBody"
            />
          </Grid>
          <Grid item={true} xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography
                variant="mdBold"
                color={errors.sexError ? '#d32f2f' : '#212121'}
              >
                SEXO:{' '}
              </Typography>
              <Checkbox
                onClick={() =>
                  setCustomer((prevState) => ({ ...prevState, sex: 'masc' }))
                }
                isActive={customer.sex === 'masc'}
                width="200px"
                marginLeft="6px"
                error={!!errors.sexError}
                data-cy="form-masc"
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
                error={!!errors.sexError}
                data-cy="form-fem"
              >
                Feminino
              </Checkbox>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                disabled={submitted}
                onClick={handleSubmit}
                width="300px"
                data-cy="form-submit"
              >
                SALVAR
              </Button>
              <CancelButton
                sx={{
                  background: (theme) => theme.palette.grey[900]
                }}
                onClick={() => navigate('/customers')}
                width="300px"
              >
                CANCELAR
              </CancelButton>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  )
}

export default Form
