import axios from 'axios'

const token = localStorage.getItem('token')

export const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

type DoGetProps = {
  url: string
  params: unknown
}
type DoPostProps = {
  url: string
  body: unknown
}

export const doGet = ({ url, params }: DoGetProps) => {
  return baseAxios.get(url, {
    params: params,
  })
}

export const doPost = ({ url, body }: DoPostProps) => {
  return baseAxios.post(url, body)
}
