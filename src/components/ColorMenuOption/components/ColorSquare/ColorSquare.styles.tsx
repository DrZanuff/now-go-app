import { StyleSheet } from 'react-native'

export const styleContainer = (backgroundColor: string) => {
  return StyleSheet.create({
    ColorSquareContainer: {
      flex: 1,
      minHeight: 32,
      minWidth: 32,
      marginRight: 32,
      backgroundColor,
      borderRadius: 4,
      shadowColor: 'black',
      shadowRadius: 3,
      shadowOpacity: 0.3,
      shadowOffset: { width: 1, height: 3 },
      elevation: 2,
    },
  })
}
