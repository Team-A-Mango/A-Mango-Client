import axios from 'axios'

// const token = localStorage.getItem('accessToken')
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const baseInstance = axios.create({
  baseURL: baseUrl,
})

export const authInstance = axios.create({
  baseURL: baseUrl,
})
