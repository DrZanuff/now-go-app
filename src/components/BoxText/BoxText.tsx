import { Text, View } from 'react-native'
import type { BoxTextTypes } from './BoxText.types'
import { BoxTextContainer } from './BoxText.styles'

export function BoxText({ colorHex, colorName }: BoxTextTypes) {
  const style = BoxTextContainer(colorHex)

  return (
    <View style={style.BoxContainer}>
      <Text style={style.TextContainer}>{`${colorName}: ${colorHex}`}</Text>
    </View>
  )
}
