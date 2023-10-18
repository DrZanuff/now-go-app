import { useCallback } from 'react'
import { Text, View, Switch } from 'react-native'
import type { ColorFieldProps } from './ColorField.types'
import { styleContainer } from './ColorField.styles'

export function ColorField({ value, color, setValue }: ColorFieldProps) {
  const style = styleContainer()

  const handleChangeSwitch = useCallback(
    (status: boolean) => {
      setValue((prev) => {
        const newColorIndex = prev.map((currentColor) => {
          if (currentColor.color.colorName === color.colorName) {
            return { ...currentColor, enabled: status }
          }

          return currentColor
        })

        return newColorIndex
      })
    },
    [color],
  )

  return (
    <View style={style.ColorFieldContainer}>
      <View style={[style.ColorSquare, { backgroundColor: color.hexCode }]} />
      <Text>{color.colorName}</Text>
      <Switch
        trackColor={{ false: '#767577', true: color.hexCode }}
        // thumbColor={value ? color.hexCode : '#f4f3f4'}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor={color.hexCode}
        onValueChange={handleChangeSwitch}
        value={value}
      />
    </View>
  )
}
