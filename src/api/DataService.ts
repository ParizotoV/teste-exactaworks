import axios, { AxiosError } from 'axios'

import { getAPIClient } from './axios'

interface DataServiceProps {
  type?: 'POST' | 'GET' | 'DELETE' | 'PATCH'
  data?: any
  url: string
}

export interface Response<T = any> {
  data: T
  error: boolean | string
  message: string
  status: number
}

export const DataService = async <T = any>({
  type = 'POST',
  data,
  url
}: DataServiceProps): Promise<Response<T> | any> => {
  const client = getAPIClient()

  try {
    const response = await client({
      data,
      method: type,
      url
    })

    return response
  } catch (err) {
    const errors = err as Error | AxiosError
    if (axios.isAxiosError(errors) && errors.response) {
      return {
        data: null,
        error: errors.response.data?.error,
        message: errors.response.data?.message,
        status: errors.response.status
      }
    }
  }
}
