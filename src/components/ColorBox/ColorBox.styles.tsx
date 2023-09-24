import { StyleSheet } from 'react-native'

type OptionalBoolean = boolean | undefined

export const ColorBoxContainer = (
  color: string,
  renderBlackText: OptionalBoolean,
) => {
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

      shadowRadius: 3,
      shadowOpacity: 0.3,
      shadowOffset: { width: 1, height: 3 },
      elevation: 60,
    },

    TextContainer: {
      textAlign: 'center',
      color: renderBlackText === true ? 'black' : 'white',
      fontSize: 15,
    },
  })
}
