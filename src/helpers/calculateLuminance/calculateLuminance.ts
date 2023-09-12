// Calculate the luminance of the background color
export const calculateLuminance = (color: string) => {
  const hex = color.slice(1) // Remove the "#" symbol
  const r = parseInt(hex.slice(0, 2), 16) / 255
  const g = parseInt(hex.slice(2, 4), 16) / 255
  const b = parseInt(hex.slice(4, 6), 16) / 255

  // Calculate the relative luminance (brightness) using the formula for sRGB
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b

  return luminance
}
