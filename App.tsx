import { StatusBar } from 'expo-status-bar'
import { useState, useCallback } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { Main } from './src/components/Main'
import { StylingExercise } from './src/components/StylingExercise'

type PageType = 'main' | 'exercise'

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('main')

  const handleChangePage = useCallback((page: PageType) => {
    setCurrentPage(page)
  }, [])

  return (
    <View style={style.container}>
      <View style={style.buttonsContianer}>
        <Button title="Main" onPress={() => handleChangePage('main')} />
        <Button title="Exercise" onPress={() => handleChangePage('exercise')} />
      </View>
      {currentPage === 'main' && <Main />}
      {currentPage === 'exercise' && <StylingExercise />}
      <StatusBar style="auto" />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonsContianer: {
    flexDirection: 'row',
    gap: 10,
  },
})
