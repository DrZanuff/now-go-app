import { useCallback } from 'react'
import { View, FlatList } from 'react-native'
import { ColorMenuOption } from '../../components/ColorMenuOption'
// import { colorArrayList } from '../../colors'
import { useRecoilValue } from 'recoil'
import { colorPalletesContext } from '../../atoms'
import { styleContainer } from './Home.styles'
import type { NavigationProps, Color } from './Home.types'

export function Home({ navigation }: NavigationProps) {
  const style = styleContainer()

  const colorOptions = useRecoilValue(colorPalletesContext)

  const handleNavigation = useCallback(
    (colors: Color[], paletteName: string) => {
      navigation.navigate('ColorList', { paletteName, colors })
    },
    [navigation],
  )

  return (
    <View style={style.HomeContainer}>
      <FlatList
        data={colorOptions}
        renderItem={({ item }) => (
          <ColorMenuOption colorOption={item} navigate={handleNavigation} />
        )}
        keyExtractor={(item) => item.paletteName}
      />
    </View>
  )
}
