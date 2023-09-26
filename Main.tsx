import { SafeArea } from './src/components/SafeArea'
import { NavigationContainer } from '@react-navigation/native'
import { ColorList } from './src/screens/ColorList'
import { Home } from './src/screens/Home'
import { ActivityIndicator, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useEffect } from 'react'
import { fetchPalettes } from './requests/fetchPalettes'
import { colorPalletesContext } from './src/atoms'
import { useRecoilState } from 'recoil'
import type { RootStackParamList } from './src/screens/RootStackParamList.types'

const Stack = createStackNavigator<RootStackParamList>()

export const Main = () => {
  const [colorOptions, setColorOptions] = useRecoilState(colorPalletesContext)

  useEffect(() => {
    async function fetchColors() {
      const palletes = await fetchPalettes()
      setColorOptions(palletes)
    }

    fetchColors()
  }, [])

  return (
    <SafeArea>
      <NavigationContainer>
        {colorOptions.length > 0 ? (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ColorList" component={ColorList} />
          </Stack.Navigator>
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
      </NavigationContainer>
    </SafeArea>
  )
}
