import { Dimensions } from 'react-native'

const gridSize = 8
const { height, width } = Dimensions.get('window')
const guidelineBaseWidth = 350
const scale = size => Math.floor(width / guidelineBaseWidth * size)

const isSmallDevice = height <= 568 && width <= 320

export default {
  height,
  width,
  isSmallDevice,
  scale,
  font: {
    size: {
      small: 11, // 8pt
      default: 13, // 10pt
      responsiveMedium: isSmallDevice ? 12 : 14,
      big: 15, // 11pt
      mediumBig: 16, // 12pt
      large: 17, // 13pt
      veryLarge: 18, // 13,5pt
      huge: 20, // 14,5pt
      veryHuge: 24, // 18pt
      immense: 48 // 36pt
    }
  },
  colors: {
    black: 'rgb(1, 1, 1)',
    lightBlack: 'rgb(51,51,51)',
    bluetoothBlue: 'rgb(0, 144, 255)',
    blackGray: 'rgb(58, 58, 58)',
    darkGray: 'rgb(82, 82, 82)',
    gray: 'rgb(93, 93, 93)',
    lightGray: 'rgb(140, 140, 140)',
    lighterGray: 'rgb(184, 184, 184)',
    lightestGray: 'rgb(205, 205, 205)',
    myAccountPageGrey: 'rgb(236, 236, 236)',
    evenLighestGrey: 'rgb(247, 247, 247)',
    red: 'rgb(215, 25, 33)',
    redTransparent: 'rgba(215, 25, 33,0.3)',
    redVivid: '#FD5760',
    grayDark: 'rgb(93, 93, 93)',
    grayLight: '#F7F7F7',
    green: 'rgb(64,191,19)',
    mediumLightGray: '#F5F5F6',
    grayMedium: '#8E8E8E',
    greenTransparent: 'rgba(57,181,74,0.3)',
    salmon: 'rgba(251,175,93,0.5)',
    lightOrange: 'rgb(251,175,93)',
    transparent: 'rgba(0, 0, 0, 0.0)',
    translucid: 'rgba(0, 0, 0, 0.5)',
    white: '#FFFFFF'
  },
  grid: {
    x1: gridSize * 1,
    x2: gridSize * 2,
    x3: gridSize * 3,
    x4: gridSize * 4,
    x5: gridSize * 5,
    x6: gridSize * 6,
    x7: gridSize * 7,
    x8: gridSize * 8,
    x9: gridSize * 9,
    x10: gridSize * 10,
    x11: gridSize * 11,
    x12: gridSize * 12,
    x13: gridSize * 13,
    x14: gridSize * 14,
    x16: gridSize * 16,
    x18: gridSize * 18,
    x27: gridSize * 27,
    x28: gridSize * 28
  },
  dimensions: {
    touchableHeight: 48,
    visibleButtonHeight: 36,
    drawerMenuWidth: width * 0.81,
    screenWidth: width
  }
}
