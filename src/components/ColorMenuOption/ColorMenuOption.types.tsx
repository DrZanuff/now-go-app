import { ColorsOption, Color } from '../../colors/color.types'

export interface ColorMenuOptionProps {
  colorOption: ColorsOption
  navigate: (colors: Color[], paletteName: string) => void
}

export interface ColorSquareProps {
  backgroundColor: string
}
