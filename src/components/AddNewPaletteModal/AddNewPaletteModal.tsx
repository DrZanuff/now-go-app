import { Text, View } from 'react-native'
import type { AddNewPaletteModalProps } from './AddNewPaletteModal.types'
import { styleContainer } from './AddNewPaletteModal.styles'

export function AddNewPaletteModal ( { value } : AddNewPaletteModalProps ) {
  const style = styleContainer()

  return (
    <View style={style.AddNewPaletteModalContainer}>
      <Text>AddNewPaletteModal</Text>
      <Text>{value}</Text>
    </View>
  )
}