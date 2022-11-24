import { ResponseIssuingBody } from 'pages/Register/Form'

export interface IssuingBody {
  label: string
  value: string
}

export const constructorUssuingBody = (
  data: ResponseIssuingBody[]
): IssuingBody[] => {
  const issuingBody: IssuingBody[] = data.map((issuing) => ({
    label: issuing.label,
    value: issuing.value
  }))

  return issuingBody
}
