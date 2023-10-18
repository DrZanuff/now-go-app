import { StyleSheet } from 'react-native'

export const styleContainer = () => {
  return StyleSheet.create({
    ColorFieldContainer: {
      flex: 1,
      padding: 5,
      flexDirection: 'row',
    },

    ColorSquare: {
      width: 32,
      height: 32,
      borderRadius: 4,
      borderWidth: 2,
    },
  })
}
