import { DataService } from 'api/DataService'
import { OptionsParams } from 'components/Select'
import { constructorUssuingBody } from 'models/IssuingBody'
import moment from 'moment'
import React from 'react'

import { CustomerState, ErrorState, ResponseIssuingBody } from '.'

// Function used when inserting a customer in MockAPI
export const post = async (data: CustomerState) => {
  const body = {
    name: data.name,
    sex: data.sex,
    rg: data.rg,
    shipping_date: moment(data.shippingDate),
    issuing_body: data.issuingBody
  }

  const response = await DataService({
    type: 'POST',
    url: '/customers',
    data: body
  })

  return response
}

// Function used when updating a customer in MockAPI
export const patch = async (data: CustomerState, id: string) => {
  const body = {
    name: data.name,
    sex: data.sex,
    rg: data.rg,
    shipping_date: moment(data.shippingDate),
    issuing_body: data.issuingBody
  }

  const response = await DataService({
    type: 'PUT',
    url: `/customers/${id}`,
    data: body
  })

  return response
}

// Search the database for a user to edit
export const getCustomer = async (
  uuid: string,
  setCustomer: React.Dispatch<React.SetStateAction<CustomerState>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const response = await DataService({
    type: 'GET',
    url: `/customers/${uuid}`
  })

  setCustomer({
    issuingBody: response.data.issuing_body,
    name: response.data.name,
    rg: response.data.rg,
    sex: response.data.sex,
    shippingDate: moment(response.data.shipping_date)
      .format('DD/MM/YYYY')
      .toString()
  })
  setLoading(false)
}

// Function used for data validation and real-time updating of errors
export const handleValidation = (
  customer: CustomerState,
  errors: ErrorState,
  setErrors: React.Dispatch<React.SetStateAction<ErrorState>>
) => {
  const fields = customer
  const errorsLocal: ErrorState = {
    nameError: '',
    rgError: '',
    sexError: '',
    shippingDateError: '',
    issuingBodyError: ''
  }
  let formIsValid = true

  if (!fields.name) {
    formIsValid = false
    errorsLocal.nameError = 'Deve ser preenchido.'
  } else {
    errorsLocal.nameError = null
  }

  if (!fields.issuingBody) {
    formIsValid = false
    errorsLocal.issuingBodyError = 'Deve ser preenchido.'
  } else {
    errorsLocal.issuingBodyError = null
  }

  if (!fields.rg) {
    formIsValid = false
    errorsLocal.rgError = 'Deve ser preenchido.'
  } else {
    errorsLocal.rgError = null
  }

  if (!fields.sex) {
    formIsValid = false
    errorsLocal.sexError = 'Deve ser preenchido.'
  } else {
    errorsLocal.sexError = null
  }

  if (!fields.shippingDate) {
    formIsValid = false
    errorsLocal.shippingDateError = 'Deve ser preenchido.'
  } else if (errors.shippingDateError) {
    formIsValid = false
  } else if (fields.shippingDate.length !== 10) {
    formIsValid = false
    errorsLocal.shippingDateError = 'Deve ser preenchido completamente.'
  } else {
    errorsLocal.shippingDateError = null
  }

  setErrors((prevState) => ({
    ...errorsLocal,
    shippingDateError:
      prevState.shippingDateError ?? errorsLocal.shippingDateError
  }))
  return formIsValid
}

// Function used to search for the issuing body
export const getIssuingBody = async (
  setIssuingBody: React.Dispatch<React.SetStateAction<OptionsParams[]>>
) => {
  const response = await DataService({ url: '/issuing_body', type: 'GET' })
  const issuingBody = constructorUssuingBody(
    response.data as ResponseIssuingBody[]
  )
  setIssuingBody(issuingBody as OptionsParams[])
}
