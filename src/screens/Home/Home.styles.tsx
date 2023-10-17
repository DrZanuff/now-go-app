import { StyleSheet } from 'react-native'

export const styleContainer = () => {
  return StyleSheet.create({
    HomeContainer: {
      flex: 1,
    },
    TextButton: {
      marginTop: 15,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%',
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: '#3aa54c',
      padding: 5,
      borderColor: '#3aa54c',
      borderWidth: 2,
      textAlign: 'center',
      borderRadius: 5,
    },
  })
}
