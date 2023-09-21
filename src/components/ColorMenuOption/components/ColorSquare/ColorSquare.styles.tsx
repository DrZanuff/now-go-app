import { StyleSheet } from 'react-native'

export const styleContainer = (backgroundColor: string) => {
  return StyleSheet.create({
    ColorSquareContainer: {
      flex: 1,
      width: 32,
      height: 32,
      backgroundColor,
      borderRadius: 4,
      shadowColor: 'black',
      shadowRadius: 3,
      shadowOpacity: 0.3,
      shadowOffset: { width: 1, height: 3 },
    },
  })
}
