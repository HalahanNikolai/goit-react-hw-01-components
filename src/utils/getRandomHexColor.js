export const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000 | 0)
    .toString(16)
    .padStart(6, 0)}`;
