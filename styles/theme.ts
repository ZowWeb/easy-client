import { COLORS } from './constants'

const variables = {
  color: '#000',
  bgColor: COLORS.white,
} as const

const theme = {
  ...variables,
}

export default theme

export type Theme = typeof theme
