import { View, Text } from 'react-native'
import { style } from './StylingExercise.styles'

export function StylingExercise() {
  return (
    <View style={style.stylingExerciseContainer}>
      <Text style={style.text}>Here are some boxes of different colours</Text>
      <Text style={[style.button, style.cyan]}>Cyan #2aa198</Text>
      <Text style={[style.button, style.blue]}>Blue #268bd2</Text>
      <Text style={[style.button, style.magenta]}>Magenta #d33682</Text>
      <Text style={[style.button, style.orange]}>Orange #cb4b16</Text>
    </View>
  )
}
