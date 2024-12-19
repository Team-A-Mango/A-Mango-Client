import axios from 'axios'

const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('accessToken')
  }
  return null
}

const token = getToken()
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const baseInstance = axios.create({
  baseURL: baseUrl,
})

export const authInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: token,
  },
})
