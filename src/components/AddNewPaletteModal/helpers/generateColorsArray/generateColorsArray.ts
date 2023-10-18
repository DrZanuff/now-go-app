import { Color, ColorIndex } from './generateColorsArray.types'

export function generateColorsArray(colors: Color[]): ColorIndex[] {
  const colorIndexedArray = colors.map((color) => ({
    color,
    enabled: false,
  }))

  return colorIndexedArray
}
