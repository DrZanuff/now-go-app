import { Text, View } from 'react-native'
import type { BoxTextTypes } from './BoxText.types'
import { BoxTextContainer } from './BoxText.styles'

export function BoxText({
  colorHex,
  colorName,
  renderBlackText,
}: BoxTextTypes) {
  const style = BoxTextContainer(colorHex, renderBlackText)

  return (
    <View style={style.BoxContainer}>
      <Text style={style.TextContainer}>{`${colorName}: ${colorHex}`}</Text>
    </View>
  )
}
