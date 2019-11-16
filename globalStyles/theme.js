import colors from "./themeDependencies/colors";
import { space, shadows, borders } from "./themeDependencies/styles";
import fontSizes from "./themeDependencies/type";

const theme = {
  colors,
  space,
  shadows,
  borders,
  fontSizes,
  breakpoints: {
    xs: 0,
    sm: 375,
    md: 735,
    lg: 1070,
    xl: 1280,
  },
};

export default theme;
