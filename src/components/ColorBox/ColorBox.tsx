import { Text, View } from 'react-native'
import type { ColorBoxTypes } from './ColorBox.types'
import { ColorBoxContainer } from './ColorBox.styles'

export function ColorBox({
  colorHex,
  colorName,
  renderBlackText,
}: ColorBoxTypes) {
  const style = ColorBoxContainer(colorHex, renderBlackText)

  return (
    <View style={style.BoxContainer}>
      <Text style={style.TextContainer}>{`${colorName}: ${colorHex}`}</Text>
    </View>
  )
}
