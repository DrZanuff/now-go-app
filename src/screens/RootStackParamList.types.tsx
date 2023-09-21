import { Color } from '../colors/color.types'

type StackRoutes = 'Home' | 'ColorList'

export type RootStackParamList = {
  [key in StackRoutes]: key extends 'ColorList'
    ? { paletteName: string; colors: Color[] }
    : undefined
}
