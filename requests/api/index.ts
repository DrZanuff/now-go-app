import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://color-palette-api.kadikraman.vercel.app/',
})
