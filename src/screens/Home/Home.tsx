import { useCallback } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import { ColorMenuOption } from '../../components/ColorMenuOption'
import { colorArrayList } from '../../colors'
import { styleContainer } from './Home.styles'
import type { NavigationProps, Color } from './Home.types'

export function Home({ navigation }: NavigationProps) {
  const style = styleContainer()

  const handleNavigation = useCallback(
    (colors: Color[], paletteName: string) => {
      navigation.navigate('ColorList', { paletteName, colors })
    },
    [navigation],
  )

  navigation.navigate

  return (
    <View style={style.HomeContainer}>
      <FlatList
        data={colorArrayList}
        renderItem={({ item }) => (
          <ColorMenuOption colorOption={item} navigate={handleNavigation} />
        )}
        keyExtractor={(item) => item.schemeName}
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate('ColorList')}>
        <Text>Solarized</Text>
      </TouchableOpacity> */}
    </View>
  )
}
