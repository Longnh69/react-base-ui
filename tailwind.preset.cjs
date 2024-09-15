/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

const colors = {
  primary: '#12E6DB',
  dark: {
    10: 'rgba(0, 0, 0, 0.10)',
    45: 'rgba(0, 0, 0, 0.45)',
    50: 'rgba(0, 0, 0, 0.50)',
    60: 'rgba(0, 0, 0, 0.60)',
    65: 'rgba(0, 0, 0, 0.65)',
    85: 'rgba(0, 0, 0, 0.85)',
    101: '#404040',
    102: '#484848',
    103: '#3A3A3A',
    104: '#8C8C8C',
    105: '#7A7A7A',
    106: '#636363',
    107: '#595959',
    108: '#BFBFBF',
    109: '#B3B3B3',
    110: '#ACACAC',
    111: '#E8E8E8',
    112: '#7D7D7D',
    113: '#5F5F5F',
    114: '#1B1B1B',
    116: '#242525',
    141: '#141414',
    222: '#4B5563',
    424: '#424242',
    666: '#A1A1AA',
    777: '#27272A',
    888: '#18181B',
    999: '#09090B',
  },
  light: {
    8: 'rgba(255, 255, 255, 0.08)',
    25: 'rgba(255, 255, 255, 0.25)',
    45: 'rgba(255, 255, 255, 0.45)',
    65: 'rgba(255, 255, 255, 0.65)',
    85: 'rgba(255, 255, 255, 0.85)',
    101: '#EAEAEA',
    102: '#FAFAFA',
    103: '#F2F2F2',
    104: '#F1F1F1',
    105: '#F9F9F9',
    106: '#F3F3F3',
    107: '#F0F2F5',
    108: '#FCFCFC',
    109: '#F2F5F8',
    110: '#F9FAFB',
    111: '#F5F5F5',
    112: '#EBEFF5',
    113: '#E5E5E5',
    114: '#D9D9D9',
    115: '#D1D1D1',
    116: '#C7C7C7',
    117: '#AEAEAE',
    118: '#FAF9F9',
    121: '#F2F5F8',
    555: '#E5E7EB',
    532: '#E6EAF0',
    595: '#999595',
    596: '#E9E4E4CE',
    666: '#71717A',
    999: '#FDFDFD1F',
  },
  blue: {
    101: '#E8F1FE',
    102: '#BAD6FB',
    103: '#5DA0F6',
    104: '#1877F2',
    105: '#0A51AE',
    215: '#001529',
    217: '#032A4D',
    218: '#0F3D66',
    219: '#286FBE',
  },
  green: {
    101: '#EBFAEF',
    102: '#B3EBC5',
    103: '#4DD077',
    104: '#2EB553',
    105: '#039732',
    106: '#52C41A',
    121: '#39AC6D',
  },
  cyan: {
    101: '#E7F9F9',
    102: '#87E8DE',
    103: '#36CFC9',
    104: '#13C2C2',
    105: '#08979C',
  },
  gray: {
    1: '#617F9B',
  },
  orange: {
    101: '#FFF7E6',
    102: '#FFD591',
    103: '#FFA940',
    104: '#FA8C16',
    105: '#D46B08',
    121: '#FC6B03',
  },
  red: {
    101: '#FFF1F0',
    102: '#FFA39E',
    103: '#FF4D4F',
    104: '#F5222D',
    105: '#CF1322',
    121: '#E14337',
  },
}

const minWidth = {
  ...defaultTheme.spacing,
}

const maxWidth = {
  ...defaultTheme.spacing,
}

const minHeight = {
  ...defaultTheme.spacing,
}

const backgroundImage = {
  'background-light': 'url("./assets/images/background-light.jpg")',
  'background-dark': 'url("./assets/images/background-dark.jpg")',
  'not-permission': 'url("./assets/images/403.png")',
  'not-found': 'url("./assets/images/404.png")',
}

const fontFamily = {
  inter: ['Inter', ...defaultTheme.fontFamily.sans],
  nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
}

module.exports = {
  theme: {
    extend: {
      colors,
      minWidth,
      maxWidth,
      minHeight,
      backgroundImage,
      fontFamily,
    },
  },
  plugins: [
    plugin(function ({ addUtilities, matchUtilities, theme }) {
      addUtilities({
        '.scrollbar': {
          '&::-webkit-scrollbar': {
            width: theme('spacing.2'),
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar:horizontal': {
            height: theme('spacing.2'),
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            minHeight: '30%',
            borderRadius: theme('borderRadius.2xl'),
            borderWidth: theme('borderWidth.8'),
            borderStyle: 'solid',
            borderColor: 'transparent',
            backgroundColor: theme('backgroundColor.light.596'),
            '&:hover': {
              backgroundColor: theme('backgroundColor.light.595'),
            },
          },
          '&::-webkit-scrollbar-thumb:horizontal': {
            minWidth: '30%',
            borderRadius: theme('borderRadius.2xl'),
            borderWidth: theme('borderWidth.8'),
            borderStyle: 'solid',
            borderColor: 'transparent',
            backgroundColor: theme('backgroundColor.light.596'),
            '&:hover': {
              backgroundColor: theme('backgroundColor.light.595'),
            },
          },
          '&::-webkit-scrollbar-corner': {
            backgroundColor: 'transparent',
          },
        },
      }),
        matchUtilities(
          {
            'scrollbar-w': (value) => ({
              '&::-webkit-scrollbar': {
                width: value,
              },
            }),
          },
          { values: defaultTheme.spacing },
        ),
        matchUtilities(
          {
            'scrollbar-h': (value) => ({
              '&::-webkit-scrollbar': {
                height: value,
              },
            }),
          },
          { values: defaultTheme.spacing },
        )
    }),
  ],
}
