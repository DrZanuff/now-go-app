import { View, Text, FlatList } from 'react-native'
import { style } from './StylingExercise.styles'
import { COLORS } from './colors'
import { calculateLuminance } from '../../helpers/calculateLuminance'

import { BoxText } from '../BoxText'

export function StylingExercise() {
  return (
    <View style={style.stylingExerciseContainer}>
      <FlatList
        data={COLORS}
        renderItem={({ item }) => (
          <BoxText
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
