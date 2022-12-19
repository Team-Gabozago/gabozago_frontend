const calcRem = (size) => `${size / 16}rem`;

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs : '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontSize: {
      xs: calcRem(12),
      sm: calcRem(16),
      md: calcRem(20),
      lg: calcRem(24),
      title: calcRem(28),
      display: calcRem(32),
    },
    fontFamily: {
      'GangwonEduPower' : 'GangwonEduPower',
      'Spoqa-Han-Sans-Neo': 'Spoqa-Han-Sans-Neo',
      'Pretendard-Regular': 'Pretendard-Regular'

    },
    colors: {
      black: '#000',
      white: '#FFF',
      blue: '#2E4FFF',
      lightNavy: '#626272',
      navy: '#2C2C3A',
      green: '#185643',
      gray: '#B2B2C8',
      lightGray: '#999999',
      darkGray: '#5c5c6a',
      silver: '#E1E1F4',
      lightSilver: '#f0f0f8',
      label: '#666666',
      noActiveButton: '#9F9F9F',
      bodyBackground: '#f7f7fc',
      lightBlack: '#222222',
      transparent: 'transparent',
      errorText: '#FF5F5F',
      gradient: `linear-gradient(to right, rgb(152, 255, 236) , rgb(0, 255, 56))`,
      greenSpeech: '#00FF38',
    },
  },
  plugins: [],
};