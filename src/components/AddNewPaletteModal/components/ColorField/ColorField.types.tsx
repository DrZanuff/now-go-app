import { Color } from '../../../../colors/color.types'
import { ColorIndex } from '../../helpers/generateColorsArray/generateColorsArray.types'

export interface ColorFieldProps {
  color: Color
  value: boolean
  setValue: React.Dispatch<React.SetStateAction<ColorIndex[]>>
}
