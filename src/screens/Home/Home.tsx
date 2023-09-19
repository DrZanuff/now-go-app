import { Text, View, TouchableOpacity } from 'react-native'
import { styleContainer } from './Home.styles'
import type { NavigationProps } from './Home.types'

export function Home({ navigation }: NavigationProps) {
  const style = styleContainer()

  return (
    <View style={style.HomeContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('ColorList')}>
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  )
}
