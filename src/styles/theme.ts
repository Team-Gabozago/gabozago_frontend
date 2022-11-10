const calcRem = (size: number): string => `${size / 16}rem`;

const color = {
    black: '#000',
    white: '#FFF',
    lime: '#52FF00',
    gray: '#AAAAAA',
    label: '#666666',
    noActiveButton: '#9F9F9F',
    inputFocus: '#222222',
    transparent: 'transparent',
    errorText: '#FF5F5F',
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
