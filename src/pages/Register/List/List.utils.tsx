import { Customer } from 'models/Customer'

export const Rows = (customers: Customer[]) => {
  return customers.map((customer) => createRows(customer))
}

const createRows = ({ name, rg }: Customer) => {
  return {
    name,
    rg
  }
}
