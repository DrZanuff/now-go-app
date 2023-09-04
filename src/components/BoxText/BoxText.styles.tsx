import { StyleSheet } from 'react-native'

export const BoxTextContainer = (color: string) => {
  // Use a regular expression pattern to validate the color string
  const validColorPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

  if (!validColorPattern.test(color)) {
    throw new Error('Invalid color string')
  }

  return StyleSheet.create({
    BoxContainer: {
      backgroundColor: color,
      borderRadius: 5,
      padding: 10,
    },

    TextContainer: {
      textAlign: 'center',
      color: 'white',
      fontSize: 15,
    },
  })
}
