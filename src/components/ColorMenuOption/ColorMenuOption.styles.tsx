import { StyleSheet } from 'react-native'

export const styleContainer = () => {
  return StyleSheet.create({
    ColorMenuOptionContainer: {
      flex: 1,
      flexDirection: 'column',
      gap: 8,
      padding: 8,
      marginBottom: 16,
    },

    ColorHeaderText: {
      fontSize: 14,
      fontWeight: 'bold',
    },

    ColorsContainer: {
      flex: 1,
      gap: 6,
      height: 32,
      flexDirection: 'row',
    },
  })
}
