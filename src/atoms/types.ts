export interface Color {
  colorName: string
  hexCode: string
}

export interface ColorsOption {
  colors: Color[]
  paletteName: string
  id?: number
}
