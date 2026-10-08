export { colors } from './tokens/colors';
export { spacing } from './tokens/spacing';
export { radius } from './tokens/radius';
export { fontFamilies, fontSize } from './tokens/typography';

export const tokens = {
  colors: require('./tokens/colors').colors,
  spacing: require('./tokens/spacing').spacing,
  radius: require('./tokens/radius').radius,
  fontFamilies: require('./tokens/typography').fontFamilies,
  fontSize: require('./tokens/typography').fontSize,
};
