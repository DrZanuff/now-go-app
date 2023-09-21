import { View } from 'react-native'
import type { ColorSquareProps } from './ColorSquare.types'
import { styleContainer } from './ColorSquare.styles'

export function ColorSquare({ backgroundColor }: ColorSquareProps) {
  const style = styleContainer(backgroundColor)

  return <View style={style.ColorSquareContainer} />
}
