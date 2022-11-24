import axios from 'axios'

export const baseURL = 'https://6376746781a568fc25ff3a83.mockapi.io/api/v1'

export function getAPIClient() {
  const api = axios.create({ baseURL })

  return api
}
