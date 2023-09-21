import { View, Text, FlatList } from 'react-native'
import { style } from './ColorList.styles'
import { SOLARIZED } from '../../colors'
import { calculateLuminance } from '../../helpers/calculateLuminance'
import { useRoute } from '@react-navigation/native'
import get from 'lodash/get'
import type { Color } from './ColorList.types'

import { ColorBox } from '../../components/ColorBox'

export function ColorList() {
  const route = useRoute()
  const colors = get(route.params, 'colors', []) as Color[]
  const paletteName = get(route.params, 'paletteName', '') as string

  console.log('DBG', route.params)

  return (
    <View style={style.ColorListContainer}>
      <FlatList
        data={colors}
        renderItem={({ item }) => (
          <ColorBox
            colorHex={item.hexCode}
            colorName={item.colorName}
            renderBlackText={calculateLuminance(item.hexCode) > 0.5}
          />
        )}
        keyExtractor={(item) => item.hexCode}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListHeaderComponent={<Text style={style.text}>{paletteName}</Text>}
      />
    </View>
  )
}
