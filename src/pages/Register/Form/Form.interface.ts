export interface ResponseIssuingBody {
  label: string
  value: string
  id: string
}

export interface CustomerState {
  name: string
  rg: string
  shippingDate: string
  issuingBody: string
  sex: string
}

export interface ErrorState {
  nameError: string | null
  rgError: string | null
  shippingDateError: string | null
  issuingBodyError: string | null
  sexError: string | null
}
