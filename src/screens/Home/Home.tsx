import { useCallback, useState, useEffect } from 'react'
import { View, FlatList, ActivityIndicator, Text } from 'react-native'
import { ColorMenuOption } from '../../components/ColorMenuOption'
import { useRecoilState } from 'recoil'
import { colorPalletesContext } from '../../atoms'
import { styleContainer } from './Home.styles'
import type { NavigationProps, Color } from './Home.types'
import { fetchPalettes } from '../../../requests/fetchPalettes'
import { TouchableOpacity } from 'react-native-gesture-handler'

export function Home({ navigation }: NavigationProps) {
  const style = styleContainer()

  const [colorOptions, setColorOptions] = useRecoilState(colorPalletesContext)
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false)

  const handleFecthPalettes = useCallback(async () => {
    const palletes = await fetchPalettes()
    setColorOptions(palletes)
    setIsRefreshing(false)
  }, [])

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true)
    handleFecthPalettes()
  }, [])

  const handleNavigation = useCallback(
    (colors: Color[], paletteName: string) => {
      navigation.navigate('ColorList', { paletteName, colors })
    },
    [navigation],
  )

  useEffect(() => {
    handleFecthPalettes()
  }, [])

  return (
    <View style={style.HomeContainer}>
      {colorOptions.length > 0 ? (
        <FlatList
          data={colorOptions}
          renderItem={({ item }) => (
            <ColorMenuOption colorOption={item} navigate={handleNavigation} />
          )}
          keyExtractor={(item) => item.paletteName}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
          ListHeaderComponent={
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AddNewPalette')
              }}
            >
              <Text style={style.TextButton}>Add Color Palette</Text>
            </TouchableOpacity>
          }
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  )
}
