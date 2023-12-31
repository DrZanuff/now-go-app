import { useState, useCallback } from 'react'
import { Text, View, FlatList, Button, Alert } from 'react-native'
import type { NavigationProps } from './AddNewPaletteModal.types'
import { styleContainer } from './AddNewPaletteModal.styles'
import { TextInput } from 'react-native-gesture-handler'
import { COLORS } from './helpers/colors'
import { generateColorsArray } from './helpers/generateColorsArray'
import { ColorField } from './components/ColorField'
import { useSetRecoilState } from 'recoil'
import { colorPalletesContext } from '../../atoms'

const Separator = () => {
  const style = styleContainer()

  return <View style={style.Separator} />
}

export function AddNewPaletteModal({ navigation }: NavigationProps) {
  const style = styleContainer()

  const setColorPalletes = useSetRecoilState(colorPalletesContext)
  const [paletteName, setPaletteName] = useState<string>('')
  const [formColors, setFormColors] = useState(generateColorsArray(COLORS))

  const handleSubmit = useCallback(() => {
    if (paletteName.length === 0) {
      Alert.alert('Missing data', 'Please, provide palette name...')
      return
    }

    const newPaletteColors = formColors.filter((color) => {
      return color.enabled === true
    })

    if (newPaletteColors.length < 3) {
      Alert.alert('Missing data', 'Please, select at least 3 colors')
      return
    }

    setColorPalletes((prev) => {
      const id = prev.length
      return [
        {
          id,
          paletteName,
          colors: newPaletteColors.map((newColor) => ({
            colorName: newColor.color.colorName,
            hexCode: newColor.color.hexCode,
          })),
        },
        ...prev,
      ]
    })

    navigation.goBack()
  }, [formColors, paletteName])

  return (
    <View style={style.AddNewPaletteModalContainer}>
      <Text>Name of your color Palette</Text>
      <TextInput
        style={style.Text}
        onChangeText={setPaletteName}
        value={paletteName}
      />
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
        ItemSeparatorComponent={Separator}
      />

      <Button onPress={handleSubmit} title="Submit" />
    </View>
  )
}
