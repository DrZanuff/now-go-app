import { api } from '../api'
import type { ColorsOption } from '../../src/atoms/types'

export async function fetchPalettes() {
  let response: ColorsOption[] = []

  try {
    const { data } = await api.get<ColorsOption[]>('palettes')
    response = data
  } catch (e) {
    console.log('Error:', e)
  }

  return response
}
