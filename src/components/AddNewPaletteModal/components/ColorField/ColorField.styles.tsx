import { StyleSheet } from 'react-native'

export const styleContainer = () => {
  return StyleSheet.create({
    ColorFieldContainer: {
      flex: 1,
      padding: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    ColorSquare: {
      width: 32,
      height: 32,
      borderRadius: 4,
      // borderWidth: 2,

      shadowColor: 'black',
      shadowRadius: 2,
      shadowOpacity: 1,
      shadowOffset: { width: 1, height: 3 },
      elevation: 3,
    },
  })
}
