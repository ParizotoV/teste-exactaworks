import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from '@mui/material'
import { Customer } from 'models/Customer'
import moment from 'moment'

import { CreateRowsActionsParams } from '.'

export const Rows = (
  customers: Customer[],
  actions: CreateRowsActionsParams
) => {
  return customers.map((customer) => createRows(customer, actions))
}

const createRows = (
  { name, rg, shippingDate, issuingBody, sex, id }: Customer,
  { handleDelete, handleEdit }: CreateRowsActionsParams
) => {
  return {
    name,
    rg,
    shippingDate: moment(shippingDate).format('DD/MM/YYYY'),
    issuingBody,
    sex: sex === 'fem' ? 'Feminino' : 'Masculino',
    actions: (
      <Box display="flex" justifyContent="flex-end">
        <FontAwesomeIcon
          onClick={() => handleEdit(id)}
          icon={faPenToSquare}
          size="lg"
          color="#757575"
          data-cy="edit-customer"
        />
        <FontAwesomeIcon
          onClick={() => handleDelete(id)}
          icon={faTrash}
          size="lg"
          style={{ marginLeft: '20px' }}
          color="#757575"
          data-cy="delete-customer"
        />
      </Box>
    )
  }
}
