import { atom } from 'recoil'
import type { ColorsOption } from './types'

export const colorPalletesContext = atom({
  key: 'colorPalletesContext',
  default: [] as ColorsOption[],
})
