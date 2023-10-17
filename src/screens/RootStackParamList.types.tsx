import { Color } from '../colors/color.types'

type StackRoutes = 'Home' | 'ColorList' | 'Main' | 'AddNewPalette'

export type RootStackParamList = {
  [key in StackRoutes]: key extends 'ColorList'
    ? { paletteName: string; colors: Color[] }
    : undefined
}

export type MainStackParamList = {
  [key in StackRoutes]: key extends 'ColorList'
    ? { paletteName: string; colors: Color[] }
    : undefined
}
