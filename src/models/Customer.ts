import { ResponseCustomer } from '../pages/Register/List/List.interface'

export interface Customer {
  createdAt: Date
  name: string
  sex: string
  rg: string
  shippingDate: Date
  issuingBody: string
  id: string
}

export const constructorCustomer = (data: ResponseCustomer[]): Customer[] => {
  const customers: Customer[] = data.map((customer) => ({
    createdAt: customer.created_at,
    id: customer.id,
    issuingBody: customer.issuing_body,
    name: customer.name,
    rg: customer.rg,
    sex: customer.sex,
    shippingDate: customer.shipping_date
  }))

  return customers
}
