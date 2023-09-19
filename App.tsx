import { SafeArea } from './src/components/SafeArea'
import { NavigationContainer } from '@react-navigation/native'
import { ColorList } from './src/screens/ColorList'
import { Home } from './src/screens/Home'
import { createStackNavigator } from '@react-navigation/stack'
import type { RootStackParamList } from './src/screens/RootStackParamList.types'

const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <SafeArea>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ColorList" component={ColorList} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeArea>
  )
}
