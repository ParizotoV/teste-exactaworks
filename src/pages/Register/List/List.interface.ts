export interface ResponseCustomer {
  created_at: Date
  name: string
  sex: string
  rg: string
  shipping_date: Date
  issuing_body: string
  id: string
}

export interface CreateRowsActionsParams {
  handleDelete: (uuid: string) => void
  handleEdit: (uuid: string) => void
}
