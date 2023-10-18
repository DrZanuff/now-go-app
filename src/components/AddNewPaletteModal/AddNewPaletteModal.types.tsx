import { StackScreenProps } from '@react-navigation/stack'
import { Color } from '../../colors/color.types'
import { RootStackParamList } from '../../screens/RootStackParamList.types'
export type { Color }

export type NavigationProps = StackScreenProps<
  RootStackParamList,
  'Add New Palette'
>
