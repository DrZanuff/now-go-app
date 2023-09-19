import { Text, View, SafeAreaView } from 'react-native'
import type { SafeAreaProps } from './SafeArea.types'
import { styleContainer } from './SafeArea.styles'
import { StatusBar } from 'expo-status-bar'

export function SafeArea({ children }: SafeAreaProps) {
  const style = styleContainer()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.SafeAreaContainer}>
        {children}
        <StatusBar />
      </View>
    </SafeAreaView>
  )
}
