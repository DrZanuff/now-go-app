import { useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import type { AddNewPaletteModalProps } from './AddNewPaletteModal.types'
import { styleContainer } from './AddNewPaletteModal.styles'
import { TextInput } from 'react-native-gesture-handler'
import { COLORS } from './helpers/colors'
import { generateColorsArray } from './helpers/generateColorsArray'
import { ColorField } from './components/ColorField'

export function AddNewPaletteModal({ value }: AddNewPaletteModalProps) {
  const style = styleContainer()

  const [paletteName, setPaletteName] = useState<string>('')
  const [formColors, setFormColors] = useState(generateColorsArray(COLORS))

  return (
    <View style={style.AddNewPaletteModalContainer}>
      <Text>Name of your color Palette</Text>
      <TextInput onChangeText={setPaletteName} value={paletteName} />
      <FlatList
        data={formColors}
        keyExtractor={(item) => item.color.colorName}
        renderItem={({ item }) => (
          <ColorField
            color={item.color}
            value={item.enabled}
            setValue={setFormColors}
          />
        )}
      />
    </View>
  )
}
