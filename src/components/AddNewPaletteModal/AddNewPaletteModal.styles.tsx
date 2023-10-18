import { StyleSheet } from 'react-native'

export const styleContainer = () => {
  return StyleSheet.create({
    AddNewPaletteModalContainer: {
      flex: 1,
      flexDirection: 'column',
      gap: 10,
      paddingTop: 20,
      paddingRight: 10,
      paddingLeft: 10,
      paddingBottom: 10,
    },
    Separator: {
      flex: 1,
      width: '100%',
      borderBottomWidth: 1,
      borderColor: '#c7c7c7',
    },

    Text: {
      borderWidth: 2,
      borderColor: '#4d4d4d',
      height: 40,
      borderRadius: 5,
      padding: 5,
      color: '#4d4d4d',
    },
  })
}
