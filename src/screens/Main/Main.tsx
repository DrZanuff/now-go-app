import { Text, View, ScrollView, SafeAreaView } from 'react-native'
import { styles } from './Main.styles'

export function Main() {
  console.log('DBG: RUNNING THE APP')
  console.warn('DBG THE APP')

  const renderText = (times: number) => {
    const arr = new Array(times).fill('')

    return arr.map((_, index) => <Text>-${index + 1}</Text>)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>OPEN up App.tsx to start working on your app!</Text>
        <Text>Look what I did!!!</Text>
        <View style={styles.scrollShadownContainer}>
          <ScrollView style={styles.scrollableContainer}>
            <Text>List:</Text>
            {renderText(150)}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}
