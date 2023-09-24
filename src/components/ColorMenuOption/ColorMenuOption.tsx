import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import { ColorSquare } from './components/ColorSquare'
import type { ColorMenuOptionProps } from './ColorMenuOption.types'
import { styleContainer } from './ColorMenuOption.styles'

export function ColorMenuOption({
  colorOption,
  navigate,
}: ColorMenuOptionProps) {
  const style = styleContainer()

  return (
    <TouchableOpacity
      onPress={() => navigate(colorOption.colors, colorOption.schemeName)}
    >
      <View style={style.ColorMenuOptionContainer}>
        <Text style={style.ColorHeaderText}>{colorOption.schemeName}</Text>

        <FlatList
          contentContainerStyle={style.ColorsContainer}
          horizontal
          data={colorOption.colors.slice(0, 5)}
          renderItem={({ item }) => (
            <ColorSquare backgroundColor={item.hexCode} />
          )}
          keyExtractor={(item) => item.hexCode}
        />
      </View>
    </TouchableOpacity>
  )
}
