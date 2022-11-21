const calcRem = (size: number): string => `${size / 16}rem`;

const color = {
    black: '#000',
    white: '#FFF',
    blue: '#2E4FFF',
    navy: '#2C2C3A',
    green: '#185643',
    lightGray: '#999999',
    silver: '#E1E1F4',
    gray: '#B2B2C8',
    label: '#666666',
    noActiveButton: '#9F9F9F',
    bodyBackground: '#f7f7fc',
    lightBlack: '#222222',
    transparent: 'transparent',
    errorText: '#FF5F5F',
    gradient: `linear-gradient(to right, rgb(152, 255, 236) , rgb(0, 255, 56))`,
};

const fontSize = {
    xs: calcRem(12),
    sm: calcRem(16),
    md: calcRem(20),
    lg: calcRem(24),
    title: calcRem(28),
    display: calcRem(32),
};

const theme = {
    color,
    fontSize,
};

export default theme;
