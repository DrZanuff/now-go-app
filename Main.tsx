import { SafeArea } from './src/components/SafeArea'
import { NavigationContainer } from '@react-navigation/native'
import { ColorList } from './src/screens/ColorList'
import { Home } from './src/screens/Home'
import { createStackNavigator } from '@react-navigation/stack'
import type {
  RootStackParamList,
  MainStackParamList,
} from './src/screens/RootStackParamList.types'
import { AddNewPaletteModal } from './src/components/AddNewPaletteModal'

const RootStack = createStackNavigator<RootStackParamList>()
const MainStack = createStackNavigator<MainStackParamList>()

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="ColorList"
        component={ColorList}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  )
}

export const Main = () => {
  return (
    <SafeArea>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ presentation: 'modal' }}>
          <RootStack.Group>
            <RootStack.Screen
              name="Main"
              component={MainStackScreen}
              options={{ headerShown: false }}
            />
          </RootStack.Group>
          <RootStack.Group>
            <RootStack.Screen
              name="Add New Palette"
              component={AddNewPaletteModal}
            />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeArea>
  )
}
