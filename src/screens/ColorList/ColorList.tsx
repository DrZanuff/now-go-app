import { View, Text, FlatList } from 'react-native'
import { style } from './ColorList.styles'
import { COLORS } from './colors'
import { calculateLuminance } from '../../helpers/calculateLuminance'

import { ColorBox } from '../../components/ColorBox'

export function ColorList() {
  return (
    <View style={style.ColorListContainer}>
      <FlatList
        data={COLORS}
        renderItem={({ item }) => (
          <ColorBox
            colorHex={item.hexCode}
            colorName={item.colorName}
            renderBlackText={calculateLuminance(item.hexCode) > 0.5}
          />
        )}
        keyExtractor={(item) => item.hexCode}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListHeaderComponent={<Text style={style.text}>Solarized</Text>}
      />
    </View>
  )
}
